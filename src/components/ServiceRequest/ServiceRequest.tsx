import { Dispatch, FC, SetStateAction } from "react";
import { Modal, Form, Input, Select, message } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const { Option } = Select;

interface Props {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

const ServiceRequest: FC<Props> = ({ setIsOpen, isOpen }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleOk = () => {
    form
      .validateFields()
      .then(() => {
        messageApi.open({
          type: "success",
          content: `Ваш запрос был отправлен!`,
        });
        setIsOpen(false);
        form.resetFields();
      })
      .catch((error) => {
        console.log("Ошибка:", error);
      });
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Запрос на услугу"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Отправить"
        cancelText="Отмена"
      >
        <Form
          form={form}
          layout="vertical"
          name="service-request"
          initialValues={{
            serviceType: "cleaning",
          }}
        >
          <Form.Item
            label="Что нужно сделать?"
            name="taskDescription"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите описание задачи",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Опишите, что нужно сделать..."
            />
          </Form.Item>

          <Form.Item
            label="Как с вами связаться?"
            name="phoneNumber"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите ваш номер телефона!",
              },
              {
                pattern: /^[+]996\s\d{3}\s\d{2}\s\d{2}\s\d{2}$/,
                message:
                  "Номер телефона должен быть в формате +996 500 00 00 00",
              },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Введите номер телефона"
            />
          </Form.Item>

          <Form.Item
            label="Выберите тип услуги"
            name="serviceType"
            rules={[
              { required: true, message: "Пожалуйста, выберите тип услуги" },
            ]}
          >
            <Select>
              <Option value="cleaning">Клининг</Option>
              <Option value="welding">Сварка</Option>
              <Option value="repair">Ремонт</Option>
              <Option value="delivery">Доставка</Option>
              <Option value="moving">Переезд</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ServiceRequest;
