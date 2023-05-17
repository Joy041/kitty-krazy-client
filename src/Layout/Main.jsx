import { Outlet } from "react-router-dom";
import Navbar from "../SharedPage/Navbar/Navbar";
import Footer from "../SharedPage/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;