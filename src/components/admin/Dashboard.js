import React from "react";

import Messages from "./dashboardItems/Messages";
import Enquiries from "./dashboardItems/Enquireis";
import Establishments from "./dashboardItems/Establishments";

function Dashboard(){
    return(
        <div id="dashboard">
        <h1>DASHBOARD</h1>

        <p>Welcome to the Dashboard</p>

        <Messages />
        <Enquiries />
        <Establishments />


        </div>
    )
}

export default Dashboard;