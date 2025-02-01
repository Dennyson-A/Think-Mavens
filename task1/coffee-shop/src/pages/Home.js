import Sidebar from "../components/Sidebar";
import CoffeeMenu from "./CoffeeMenu";
import SearchFilter from "./../components/SearchFilter";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
        <div className="home-page">
        <div className="searchbar">
          <SearchFilter />
          </div>
        <div className="content">
          <CoffeeMenu />
        </div>
      </div>
    </div>
  );
};

export default Home;
