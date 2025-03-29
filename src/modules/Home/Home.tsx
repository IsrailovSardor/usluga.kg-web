import css from "./Home.module.scss";
import TabInformations from "./TabInformations/TabInformations";
import Services from "./Services/Services";
import CategoriesList from "./CategoriesList/CategoriesList";
import JobWithMe from "./JobWithMe/JobWithMe";

const Home = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        <Services />
        <TabInformations />
        <CategoriesList />
        <JobWithMe />
      </div>
    </div>
  );
};

export default Home;
