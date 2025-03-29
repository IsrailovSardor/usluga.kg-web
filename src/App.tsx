import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header/Header";
import Home from "./modules/Home/Home";
import Category from "./modules/Category/Category";
import Specialist from "./modules/Specialist/Specialist";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/specialist" element={<Specialist />} />
      </Routes>
    </>
  );
};

export default App;
