import React from 'react'

export default function Sec6() {
    return(
        <section className="tiendas ">
                <div className="title-section">
                    <h2>Las mejores tiendas te esperan</h2>
                    <a href="">Ver tiendas</a>
                </div>   
                <div className="tiendas-list">
                    <div className="items-tiendas">
                        <div className="background-tienda">
                            <img src="/legoback.png" alt="legoback"/>
                        </div>
                        <img src="/lego.png" alt="lego"/>
                        <div className="product-container">
                            <h3>Lego</h3>
                            <div className="product-items flex flex-row gap-1">
                                <a href="/product"><img src="/motolego.png" alt="motolego"/></a>
                                <a href="/product"><img src="/legohero.png" alt="legohero"/></a>
                                <a href="/product"><img src="/legocar.png" alt="legocar"/></a>
                            </div>
                            <a href="/">Ver tienda</a>
                        </div>
                        
                    </div>
                    <div className="items-tiendas">
                        <div className="background-tienda">
                            <img src="/xiaomiback.png" alt=""/>
                        </div>
                        <img src="/xiaomi.png" alt=""/>
                        <div className="product-items product-container">
                            <h3>Xiaomi</h3>
                            <div className="product-items flex flex-row gap-1">
                                <a href="/product"><img src="/reloj.png" alt="reloj"/></a>
                                <a href="/product"><img src="/monopatin.png" alt="monopatin"/></a>
                                <a href="/product"><img src="/monopatinf.png" alt="monopatinf"/></a>
                            </div>
                            <a href="/">Ver tienda</a>
                        </div>
                    </div>
                    <div className="items-tiendas">
                        <div className="background-tienda">
                            <img src="/osterback.png" alt=""/>
                        </div>
                        <img src="/oster.png" alt=""/>
                        <div className="product-container">
                            <h3>Oster</h3>
                            <div className="product-items flex flex-row gap-1">
                                <a href="/product"><img src="/plato.png" alt="plato"/></a>
                                <a href="/product"><img src="/jarra.png" alt="jarra"/></a>
                                <a href="/product"><img src="/arrocera.png" alt="arrocera"/></a>
                            </div>
                            <a href="/">Ver tienda</a>
                        </div>
                    </div>
                    <div className="items-tiendas">
                        <div className="background-tienda">
                            <img src="/nikonback.png" alt=""/>
                        </div>
                        <img src="/nikon.png" alt=""/>
                        <div className="product-items product-container">
                            <h3>Nikon</h3>
                            <div className="product-items flex flex-row gap-1">
                                <a href="/product"><img src="/cables.png" alt="cables"/></a>
                                <a href="/product"><img src="/cablesN.png" alt="cablesN"/></a>
                                <a href="/product"><img src="/camera.png" alt="camera"/></a>
                            </div>
                            <a href="/">Ver tienda</a>
                        </div>
                        
                    </div>
                </div>
            </section>
    );
}
