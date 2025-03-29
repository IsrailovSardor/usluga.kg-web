import { MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Flex, Image, Space, Typography } from "antd";

const Card = ({ user }: any) => {
  return (
    <Space direction="vertical" size={16}>
      <Space size={16} align="start">
        <Image
          style={{
            borderRadius: "10px",
            objectFit: "cover",
            width: "100px",
            height: "130px",
          }}
          width={100}
          height={130}
          alt={user.fullName}
          src={user.photo}
        />
        <Flex
          vertical
          justify="space-between"
          style={{
            height: "130px",
          }}
        >
          <Space direction="vertical" size={0}>
            <Typography.Title
              style={{
                marginBottom: "0",
              }}
              level={3}
            >
              {user.fullName}
            </Typography.Title>
            <Typography.Text>{user.phoneNumber}</Typography.Text>
          </Space>
          <Space size={32}>
            <Button
              style={{
                background: "none",
                padding: 0,
              }}
              icon={<StarOutlined />}
              variant="text"
              color="purple"
            >
              {user.reviews.length}
            </Button>
            <Button
              style={{
                background: "none",
                padding: 0,
              }}
              variant="text"
              color="purple"
              icon={<MessageOutlined />}
            >
              {user.reviews.length} отзывов
            </Button>
          </Space>
        </Flex>
      </Space>
      <Typography.Text>{user?.description || "-"}</Typography.Text>
    </Space>
  );
};

export default Card;
