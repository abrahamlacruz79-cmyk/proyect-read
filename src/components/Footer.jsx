
const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-3 mt-5">
            <div className="container">

                <div className="row text-center text-md-start">

                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold text-danger">
                            MAZDA
                        </h4>
                        <p>
                            Conduce tus sueños con nosotros.
                            Calidad, innovación y tecnología
                            en cada vehículo.
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">
                            Nuestros vehículos
                        </h5>
                        <p>Mazda 2</p>
                        <p>Mazda 3</p>
                        <p>Mazda CX-30</p>
                        <p>Mazda CX-50</p>
                        <p>Mazda BT-50</p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h5 className="fw-bold">
                            Contáctanos
                        </h5>
                        <p>Teléfono: 300 000 0000</p>
                        <p>Correo: contacto@mazda.com</p>
                        <p>Medellín, Colombia</p>
                    </div>

                </div>

                <hr className="border-secondary" />

                <div className="text-center">
                    <p className="mb-0">
                        © 2026 Concesionario Mazda.
                        Todos los derechos reservados.
                    </p>
                    <small className="text-secondary">
                        Tecnología, elegancia y rendimiento.
                    </small>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
