import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import SignupLoginPage from "../authentication/SignupLoginPage";

const Home = () => {
    return (
        <>
            <TopBar />
            <SignupLoginPage />
            <Dashboard />
        </>
    );
};

export default Home;
