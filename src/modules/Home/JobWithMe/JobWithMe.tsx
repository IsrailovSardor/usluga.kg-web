import { Typography } from "antd";
import css from "./JobWithMe.module.scss";
export const benefits = [
  {
    id: 1,
    title: "Есть работа для всех",
    description:
      "Выберите интересующие вас категории услуг и получайте сотни новых заявок и вакансий каждый день",
  },
  {
    id: 2,
    title: "Работайте на репутацию",
    description:
      "Выполняйте работу качественно, получайте положительные отзывы, и клиенты будут выбирать вас чаще или звонить вам из каталога",
  },
  {
    id: 3,
    title: "Выгодные условия",
    description:
      "Мы не берем комиссию с каждого заказа, вы оплачиваете только доступ к заявкам, а также получаете бонусы для оплаты внутри сервиса",
  },
  {
    id: 4,
    title: "Все в ваших руках",
    description:
      "Скачивайте приложение, регистрируйтесь и ваше будущее будет в ваших руках",
  },
];

const JobWithMe = () => {
  return (
    <div className={css.wrapper}>
      <Typography.Title level={5}>
        Начни зарабатывать в usluga.kg
      </Typography.Title>
      <Typography.Title
        style={{
          margin: "0 0 20px",
        }}
        level={2}
      >
        Сотни заказов и вакансий
      </Typography.Title>
      <div className={css.block}>
        <div className={css.lists}>
          {benefits.map((x) => (
            <div className={css.list}>
              <Typography.Title level={5}>{x.title}</Typography.Title>
              <Typography.Text>{x.description}</Typography.Text>
            </div>
          ))}
        </div>
        <img
          className={css.img}
          src="https://bigfoto.name/photo/uploads/posts/2023-03/thumbs/1678034920_bigfoto-name-p-remontnie-uslugi-36.jpg"
        />
      </div>
    </div>
  );
};

export default JobWithMe;
