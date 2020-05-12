import React from "react";
import "../Layout/Layout.css";

const layout = (props)=> (
    <div>
    <div >Toolbar, Sidebar, Backdrop</div>
    <main className="Content">
        {props.children}
    </main>
    </div>
);

export default layout;