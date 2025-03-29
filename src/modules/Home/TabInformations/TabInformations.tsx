import {
  SolutionOutlined,
  PlusCircleOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import css from "./TabInformations.module.scss";
import { Flex, Typography } from "antd";
import ServiceRequest from "../../../components/ServiceRequest/ServiceRequest";
import { useState } from "react";

enum TabType {
  Services = "Услуги",
  Create = "Создать",
  Work = "Работа",
}

const tabData = [
  {
    id: 1,
    title: TabType.Services,
    description: "Заказывайте услуги",
    icon: <SolutionOutlined style={{ fontSize: "22px" }} />,
  },
  {
    id: 2,
    title: TabType.Create,
    description: "Заявку, вакансию и т.д.",
    icon: <PlusCircleOutlined style={{ fontSize: "22px" }} />,
  },
  {
    id: 3,
    title: TabType.Work,
    description: "Начните зарабатывать",
    icon: <MoneyCollectOutlined style={{ fontSize: "22px" }} />,
  },
];

const TabInformations = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCreateClick = () => {
    setIsOpen(true);
  };

  return (
    <div className={css.wrapper}>
      <ServiceRequest setIsOpen={setIsOpen} isOpen={isOpen} />
      {tabData.map(({ id, title, description, icon }) => (
        <Flex
          key={id}
          className={css.block}
          onClick={title === TabType.Create ? handleCreateClick : undefined}
        >
          {icon}
          <Typography.Title
            level={4}
            type="secondary"
            style={{
              marginBottom: "0",
            }}
          >
            {title}
          </Typography.Title>
          <Typography.Text type="secondary">{description}</Typography.Text>
        </Flex>
      ))}
    </div>
  );
};

export default TabInformations;
