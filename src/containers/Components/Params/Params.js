import { NavLink, Outlet, } from "react-router-dom"
import './Params.css'

const Params = props => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink activeclassname='active' to='AungAung/details'>Aung Aung</NavLink>
                </li>
                <li>
                    <NavLink activeclassname='active' to='MoeMoe/details'>Moe Moe</NavLink>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
export default Params;