import React from "react";

function Footer() {
    return (
        <footer>
            <div className="fcont">
                <div>
                    <div className="t1footer">
                        <span>Trabaja con nosotros</span>
                        <span>Términos y condiciones</span>
                        <span>Cómo cuidamos tu privacidad</span>
                        <span>Accesibilidad</span>
                        <span>Ayuda / PQR</span>
                        <span>www.sic.gov.co</span>
                    </div>
                    <div className="mb-2">
                        <span>
                            Copyright © 1999-2023 MercadoLibre Colombia LTDA.
                        </span>
                    </div>
                    <div className="mb-2">
                        <span>
                            Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
                        </span>
                    </div>
                </div>
                <div className="flex flex-row flex-start ">
                    <img src="/indycomer.png" alt="imagen" className="mr-4" />
                    <img src="/pareycomp.png" alt="imagen" />
                </div>
            </div>
        </footer>
    );
}

export default Footer;
