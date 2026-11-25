
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Index from "./pages/Index.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";

function App() {
    return (
        <BrowserRouter>
            <>
                <Header />

                <Routes>
                    <Route path="/" element={<Index />} />

                    <Route path="/nosotros" element={<Nosotros />} />

                    <Route path="/contacto" element={<Contacto />} />

                    <Route
                        path="*"
                        element={
                            <main className="container text-center my-5">
                                <h1>404</h1>
                                <p>La página que buscas no existe.</p>
                            </main>
                        }
                    />
                </Routes>

                <Footer />
            </>
        </BrowserRouter>
    );
}

export default App;
