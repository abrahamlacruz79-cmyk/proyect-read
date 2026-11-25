
const Contacto = () => {
    return (
        <main className="container my-5">

            <div className="text-center mb-5">
                <h1 className="fw-bold">Contáctanos</h1>

                <p className="lead text-secondary">
                    En Mazda Motors estamos disponibles para ayudarte
                    a encontrar el vehículo ideal para ti.
                </p>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8">

                    <div className="card shadow-sm border-0">
                        <div className="card-body p-4">

                            <h4 className="mb-4">
                                Información de contacto
                            </h4>

                            <p>
                                <strong>Empresa:</strong><br />
                                Mazda Motors
                            </p>

                            <p>
                                <strong>Correo electrónico:</strong><br />
                                contacto@mazdamotors.com
                            </p>

                            <p>
                                <strong>Teléfono:</strong><br />
                                +57 300 000 0000
                            </p>

                            <p>
                                <strong>Dirección:</strong><br />
                                Medellín, Colombia
                            </p>

                            <p>
                                <strong>Horario de atención:</strong><br />
                                Lunes a viernes, de 8:00 a. m. a 5:00 p. m.
                            </p>

                        </div>
                    </div>

                </div>
            </div>

        </main>
    );
};

export default Contacto;
