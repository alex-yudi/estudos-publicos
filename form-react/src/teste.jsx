import { Outlet, Navigate } from "react-router-dom";

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
}

function Navbar() {
    return (
        <nav>
            <h2>Dashboard</h2>

            <Route path='/' element={<Home />} >

                <Route path=':id' element={<PaginaEscolhida />} />

            </Route>

        </nav>
    )
}

import { NavLink } from "react-router-dom";

function teste() {

    return (
        <>
            <Route path='*' element={pagina404} />
        </>
    )
}