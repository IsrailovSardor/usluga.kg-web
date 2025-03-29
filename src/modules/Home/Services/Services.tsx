import { Button, Input, Typography } from "antd";
import css from "./Services.module.scss";
import { useEffect, useRef, useState } from "react";

const servicesData = [
  {
    title: "Услуги клининга",
    image: "https://cojo.ru/wp-content/uploads/2022/12/klining-1.webp",
    flex: "0 0 30%",
  },
  {
    title: "Строительные работы",
    image: "https://cojo.ru/wp-content/uploads/2022/12/remont-pokraska-1.webp",
    flex: "0 0 20%",
  },
  {
    title: "Юридические услуги",
    image:
      "https://cojo.ru/wp-content/uploads/2022/12/molotok-i-vesy-pravosudiia-1.webp",
    flex: "0 0 25%",
  },
  {
    title: "Услуги сантехника",
    image:
      "https://cojo.ru/wp-content/uploads/2022/12/santekhnika-banner-2.webp",
    flex: "0 0 21%",
  },
  {
    title: "Услуги репетитора",
    image: "https://cojo.ru/wp-content/uploads/2022/12/fon-ucheba-7.webp",
    flex: "0 0 20%",
  },
  {
    title: "Медицинские услуги",
    image: "https://cojo.ru/wp-content/uploads/2023/01/meditsinskii-fon-2.webp",
    flex: "0 0 20%",
  },
  {
    title: "Мастера красоты",
    image:
      "https://cojo.ru/wp-content/uploads/2022/12/instrumenty-parikmakhera-5.webp",
    flex: "0 0 30%",
  },
  {
    title: "Прочие услуги",
    image: "https://cojo.ru/wp-content/uploads/2022/12/delovoi-fon-28.webp",
    flex: "0 0 25%",
  },
];

const Services = () => {
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  const filteredServices = servicesData.filter((service) =>
    service.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={css.wrapper}>
      <Typography.Title level={1} style={{}}>
        Для любой задачи есть Usluga KG
      </Typography.Title>
      <Typography.Title level={4}>100 клиентов доверили дела</Typography.Title>
      <div className={css.input} ref={inputRef}>
        <Input
          placeholder="Введите услугу"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setShowDropdown(!!e.target.value);
          }}
        />

        {showDropdown && filteredServices.length > 0 && (
          <div className={css.lists}>
            {filteredServices.map((service) => (
              <Button
                key={service.title}
                variant="text"
                style={{ justifyContent: "flex-start" }}
                color="purple"
                onClick={() => {
                  setSearchText(service.title);
                  setShowDropdown(false);
                }}
              >
                {service.title}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div className={css.container}>
        <div className={css.line}>
          {servicesData.slice(0, 4).map((service, index) => (
            <div
              className={css.block}
              key={`item-service-${index}`}
              style={{ flex: service.flex }}
            >
              <Typography.Text>{service.title}</Typography.Text>
              <img src={service.image} alt={service.title} />
            </div>
          ))}
        </div>
        <div className={css.line}>
          {servicesData.slice(4).map((service, index) => (
            <div
              className={css.block}
              key={`item-service-${index}`}
              style={{ flex: service.flex }}
            >
              <Typography.Text>{service.title}</Typography.Text>
              <img src={service.image} alt={service.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
