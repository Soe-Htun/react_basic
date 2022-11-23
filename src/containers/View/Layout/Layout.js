import React from "react";
import { Outlet, NavLink
} from "react-router-dom";
import './Layout.css'

const Layout = props => {
    return (
        <div className="d-flex">
            <nav className="leftSide">
                <ul>
                    <li><NavLink activeclassname='active' to="redux">Redux</NavLink></li>
                    <li><NavLink activeclassname='active' to="context">Context</NavLink></li>
                    <li><NavLink activeclassname='active' to='params'>Params</NavLink></li>
                    <li><NavLink activeclassname='active' to='getData'>Get Data</NavLink></li>
                </ul>
            </nav>
            <div className="rightSide">
                <Outlet/>
            </div>
        </div>
    )
}


export default Layout;