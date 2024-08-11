import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"




const Navigation = () => {
    return (
        <>
            <BrowserRouter>

                <div className="main-layout">
                    <nav>
                        <img src='logo192.png' alt="" />
                        <ul>
                            <li>
                                <NavLink to='/home' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
                                <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
                                <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/home" element={<h1>Home Page</h1>}></Route>
                        <Route path="/users" element={<h1>Users Page</h1>}></Route>
                        <Route path="/about" element={<h1>About Page</h1>}></Route>

                        <Route path="/*" element={<Navigate to='/home' replace />}></Route>

                    </Routes>

                </div>
            </BrowserRouter>
        </>
    )
}

export default Navigation
