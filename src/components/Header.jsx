
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
            <div className="container">

                <NavLink className="navbar-brand fw-bold fs-3" to="/">
                    <span className="text-danger">MAZDA</span>
                    <span className="text-white"> MOTORS</span>
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuPrincipal"
                    aria-controls="menuPrincipal"
                    aria-expanded="false"
                    aria-label="Mostrar navegación"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menuPrincipal">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <NavLink
                                className="nav-link fw-semibold"
                                to="/"
                                end
                            >
                                Inicio
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link fw-semibold"
                                to="/nosotros"
                            >
                                Nosotros
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link fw-semibold"
                                to="/vehiculos"
                            >
                                Vehículos
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                className="nav-link fw-semibold"
                                to="/contacto"
                            >
                                Contacto
                            </NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;
