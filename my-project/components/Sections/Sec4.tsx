import React from "react";

function Sec4() {
    return (
        <section className="flex flex-col pt-10 pad">
            <div className="tsec4 ">
                <span className="sp1sec4">Beneficios de Mercado Puntos</span>
                <span className="sp2sec4">Ver todos los beneficios</span>
            </div>
            <div className="imgsec4">
                <div className="containersec4">
                    <img src="/bene1.png" alt="imagen"/>

                    <div className="overlaysec4 ">
                        <img src="/disnep.png" alt="imagen"/>
                        <span className="t1-overlay1">Sin cargo con el nivel 6</span> <br/>
                        <span className="t2-overlay1">Disney+ y Star+</span>
                    </div>
                </div>

                <div className="containersec4">
                    <img src="/bene2.png" alt="imagen"/>

                    <div className="overlaysec4">
                        <img src="/max.png" alt="imagen"/>
                        <span className="t1-overlay2">7 DÍAS GRATIS</span> <br/>
                        <span className="t2-overlay2">Hasta 50% OFF</span> <br/>
                        <span className="t3-overlay2">HBO Max</span>
                    </div>
                </div>

                <div className="containersec4">
                    <img src="/bene3.png" alt="imagen"/>
                    <div className="overlaysec4">
                        <img src="/paramot.png" alt="imagen"/>
                        <span className="t1-overlay2">7 DÍAS GRATIS</span>
                        <span className="t2-overlay2">Hasta 50% OFF</span>
                        <span className="t3-overlay2">Paramount+</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Sec4;