import { Button, Flex, Typography } from "antd";
import Location from "../../components/Location/Location";
import { SolutionOutlined, UserOutlined } from "@ant-design/icons";
import css from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onRedirectHome = () => {
    navigate("/");
  };

  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Flex gap={16} align="center">
          <Typography.Title
            style={{
              cursor: "pointer",
              marginBottom: "0",
            }}
            level={3}
            onClick={onRedirectHome}
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
