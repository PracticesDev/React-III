import { Suspense } from "react"
import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom"


//Navegacion Principal
import { routes } from './routes';



const Navigation = () => {
    return (
        <>
            <Suspense fallback={ <span>Loading...</span> } >
                <BrowserRouter>

                    <div className="main-layout">
                        <nav>
                            <img src='logo192.png' alt="" />
                            <ul>
                                {
                                    routes.map(route => (
                                        <li key={route.to}>
                                            <NavLink
                                                to={route.path}
                                                className={({ isActive }) => isActive ? 'nav-active' : ''}>
                                                {route.name}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                        <Routes>
                            {
                                routes.map(route => (
                                    <Route
                                        key={route.to}
                                        path={route.path}
                                        element={<route.component />}
                                    />
                                ))
                            }

                            <Route path="/*" element={<Navigate to={routes[0].to} replace />}></Route>
                        </Routes>

                    </div>
                </BrowserRouter>
            </Suspense>
        </>
    )
}
export default Navigation
