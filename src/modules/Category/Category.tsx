import React, { useState, useEffect } from "react";
import { Select, Button, Typography, Space, Row, Col } from "antd";
import { categories, users } from "../../data";
import css from "./Category.module.scss";
import { DeleteOutlined } from "@ant-design/icons";
import Card from "../../components/Card/Card";
import { useSearchParams } from "react-router-dom";

const Category: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialCategory = searchParams.get("category");
  const initialSubCategory = searchParams.get("subCategory");

  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(
    initialSubCategory
  );
  const [subCategoriesOptions, setSubCategoriesOptions] = useState<any[]>([]);

  useEffect(() => {
    if (selectedCategory) {
      const selectedCategoryObj = categories.find(
        (category) => category.type === selectedCategory
      );
      if (selectedCategoryObj) {
        setSubCategoriesOptions(selectedCategoryObj.subcategories);
      }
    } else {
      setSubCategoriesOptions([]);
    }
  }, [selectedCategory]);

  useEffect(() => {
    const params: any = {};
    if (selectedCategory) params.category = selectedCategory;
    if (selectedSubCategory) params.subCategory = selectedSubCategory;
    setSearchParams(params);
  }, [selectedCategory, selectedSubCategory, setSearchParams]);

  const filteredUsers = users.filter((user) => {
    if (selectedCategory && selectedSubCategory) {
      return user.subCategories.some(
        (subCategory) =>
          subCategory.parentType === selectedCategory &&
          subCategory.subType === selectedSubCategory
      );
    }
    if (selectedCategory) {
      return user.subCategories.some(
        (subCategory) => subCategory.parentType === selectedCategory
      );
    }
    return true;
  });

  const clearAll = () => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSearchParams({});
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Space direction="vertical" size={16}>
          <Space direction="vertical" size={4} style={{ width: "100%" }}>
            <Typography.Title level={5}>Категория</Typography.Title>
            <Select
              showSearch
              allowClear
              style={{ width: "100%" }}
              placeholder="Все категории"
              value={selectedCategory}
              onChange={setSelectedCategory}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={categories.map((category) => ({
                value: category.type,
                label: category.name,
              }))}
            />
          </Space>

          <Space style={{ width: "100%" }} direction="vertical" size={4}>
            <Typography.Title level={5}>Подкатегория</Typography.Title>
            <Select
              showSearch
              style={{ width: "100%" }}
              disabled={!selectedCategory}
              placeholder="Все подкатегории"
              value={selectedSubCategory}
              onChange={setSelectedSubCategory}
              allowClear
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={subCategoriesOptions.map((category) => ({
                value: category.subType,
                label: category.name,
              }))}
            />
          </Space>

          <Button
            variant="text"
            color="purple"
            onClick={clearAll}
            icon={<DeleteOutlined />}
          >
            Сбросить все
          </Button>
        </Space>

        <Space direction="vertical" size={16}>
          <Typography.Text>Найдено: {filteredUsers.length}</Typography.Text>
          <Row gutter={[16, 16]}>
            {filteredUsers.map((user) => (
              <Col xs={24} sm={12} md={12} lg={12} key={user.id}>
                <Card user={user} />
              </Col>
            ))}
          </Row>
        </Space>
      </div>
    </div>
  );
};

export default Category;
