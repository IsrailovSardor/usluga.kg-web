import { Button, Typography } from "antd";
import css from "./CategoriesList.module.scss";
import { useEffect, useState } from "react";
import { categories } from "../../../data";

const CategoriesList = () => {
  const [selectedCity, setSelectedCity] = useState("Бишкек");

  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) setSelectedCity(savedCity);
  }, []);

  return (
    <div className={css.wrapper}>
      <Typography.Title level={2}>Услуги в {selectedCity}</Typography.Title>
      <div className={css.categories}>
        {categories.map((item) => (
          <div className={css.categorie}>
            <Button
              variant="text"
              style={{
                fontWeight: "bold",
              }}
              size="large"
              color="default"
            >
              {item.name}
            </Button>
            <div className={css.subCategorie}>
              {item.subcategories.map((x) => (
                <Button variant="text" color="purple">
                  {x.name}
                </Button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
