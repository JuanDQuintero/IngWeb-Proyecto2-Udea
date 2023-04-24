import React from "react";

const Sec5 = () => (
        <section className="flex flex-col w-full bg-white">
            <span className="tpsec5">Descubre</span>
            <div className="flex flex-row imagenlist" >
                <div className="flex flex-row element-1">
                    <div className=" conxsec5">
                        <span className="t1sec5">RENUEVA TUS ESPACIOS</span>
                        <span className="t2sec5">HOGAR Y MUEBLES <br /> HASTA 50% OFF</span>
                        <button className="t3sec5">Ver más</button>
                    </div>
                    <img src="/hogar.png" alt="imagen"/>
                </div>
                <div className="flex flex-row element-2 ">
                    <div className=" conxsec5">
                        <span className="t1sec5">SUSCRÍBETE AL NIVEL 6</span>
                        <span className="t2sec5">Por solo <br /> $17.899 cada mes</span>
                        <button className="t3sec5">Suscribirme</button>
                    </div>
                    <img src="/suscrib.png" alt="imagen" />
                </div>
            </div>
        </section>
)
export default Sec5;
