import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import './MainLayout.css';

const MainLayout = () => {
    return (
        <>
            <div className="main-layout">
                <div className="side-bar">
                    <SideBar />
                </div>
                <div className="content">
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>

        </>
    );
};

export default MainLayout;