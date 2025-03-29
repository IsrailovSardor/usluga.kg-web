import { Button, Flex, Typography } from "antd";
import Location from "../../components/Location/Location";
import { SolutionOutlined, UserOutlined } from "@ant-design/icons";
import css from "./Header.module.scss";

const Header = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Flex gap={16} align="center">
          <Typography.Title
            style={{
              marginBottom: "0",
            }}
            level={3}
          >
            Usluga KG
          </Typography.Title>
          <Location />
        </Flex>
        <Flex gap={16} align="center">
          <Button variant="text" color="purple" icon={<SolutionOutlined />}>
            Стать специалистом
          </Button>
          <Button variant="text" color="purple" icon={<UserOutlined />}>
            Вход
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default Header;
