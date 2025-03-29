import { Button, Flex, Input, message, Modal, Radio } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const cities = [
  { id: 0, title: "Бишкек" },
  { id: 1, title: "Ош" },
  { id: 2, title: "Джалал-Абад" },
  { id: 3, title: "Каракол" },
  { id: 4, title: "Токмок" },
  { id: 5, title: "Нарын" },
  { id: 6, title: "Талас" },
  { id: 7, title: "Баткен" },
  { id: 8, title: "Кара-Балта" },
  { id: 9, title: "Кызыл-Кия" },
  { id: 10, title: "Балыкчы" },
  { id: 11, title: "Исфана" },
  { id: 12, title: "Кочкор-Ата" },
  { id: 13, title: "Сулюкта" },
  { id: 14, title: "Таш-Кумыр" },
  { id: 15, title: "Майлуу-Суу" },
  { id: 16, title: "Орловка" },
  { id: 17, title: "Кадамжай" },
  { id: 18, title: "Жалал-Абад" },
  { id: 19, title: "Айдаркен" },
];

const Location = () => {
  const [selectedCity, setSelectedCity] = useState("Выберите город");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) setSelectedCity(savedCity);
  }, []);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setSelectedCity("Геолокация не поддерживается");
      messageApi.open({
        type: "error",
        content: "Геолокация не поддерживается вашим браузером",
      });
      return;
    }

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await res.json();
          const city =
            cities.find((c) => data.address.city?.includes(c.title))?.title ||
            "Город не найден";
          setSelectedCity(city);
          messageApi.open({
            type: "success",
            content: `Город определён как "${city}"`,
          });
        } catch {
          setSelectedCity("Ошибка определения");
          messageApi.open({
            type: "error",
            content: "Не удалось определить город",
          });
        } finally {
          setIsLoading(false);
        }
      },
      () => {
        setSelectedCity("Геолокация отключена");
        messageApi.open({
          type: "warning",
          content: "Пожалуйста, включите геолокацию в настройках браузера",
        });
        setIsLoading(false);
      }
    );
  };

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
    setIsModalOpen(false);
    localStorage.setItem("selectedCity", city);
    messageApi.open({
      type: "success",
      content: `Город успешно изменён на "${city}"`,
    });
  };

  const filteredCities = cities.filter((city) =>
    city.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {contextHolder}
      <Button
        variant="text"
        color="purple"
        icon={<EnvironmentOutlined />}
        onClick={() => setIsModalOpen(true)}
        loading={isLoading}
      >
        {selectedCity}
      </Button>
      <Modal
        title="Выберите город"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={
          <Button
            type="primary"
            icon={<EnvironmentOutlined />}
            onClick={handleGetLocation}
            loading={isLoading}
          >
            Определить местоположение
          </Button>
        }
        width={400}
      >
        <Input
          placeholder="Поиск города..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          allowClear
          style={{ marginBottom: 10 }}
        />
        <div style={{ maxHeight: 300, overflowY: "auto", paddingRight: 5 }}>
          <Radio.Group
            onChange={(e) => handleSelectCity(e.target.value)}
            value={selectedCity}
          >
            <Flex gap="middle" vertical>
              {filteredCities.length > 0 ? (
                filteredCities.map((item) => (
                  <Radio key={item.id} value={item.title}>
                    {item.title}
                  </Radio>
                ))
              ) : (
                <Flex vertical>
                  <p>Ничего не найдено</p>
                  <p>Попробуйте иначе сформулировать запрос</p>
                </Flex>
              )}
            </Flex>
          </Radio.Group>
        </div>
      </Modal>
    </>
  );
};

export default Location;
