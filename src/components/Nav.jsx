import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <div className="header-menu">
            <ul>
                <li>
                    <NavLink to='/' activeclass='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' activeclass='active'>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/' activeclass='active'>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Nav;