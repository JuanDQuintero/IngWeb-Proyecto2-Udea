import Cards from '@components/Card';
import React from 'react'
import Slider from 'react-slick'

export default function Carrusel() {
  const settings = {
    dots: false, // muestra los puntos de navegación del carrusel
    infinite: true, // permite la navegación infinita del carrusel
    speed: 500, // velocidad de transición de la diapositiva en milisegundos
    slidesToShow: 5, // cantidad de diapositivas a mostrar al mismo tiempo
    slidesToScroll: 1, // cantidad de diapositivas que se desplazan con cada clic
    responsive: [
      {
        breakpoint: 1024, // cambiar la configuración cuando el ancho de la pantalla sea menor o igual a 1024 píxeles
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const products = [
    { id: 1, name: "Silla",src: '/silla.png', alt: "silla", price: 210.900 , discount: "32% OFF",svg: ""},
    { id: 2, name: "Microfono",src: '/microfono.png', alt: "microfono", price: 74.990, discount: "25% OFF", svg: "/Vector (2).svg" },
    { id: 3, name: "Afeitadora",src: '/afeitadora.png', alt: "afeitadora", price: 134.950, discount: "50% OFF", svg: ""},
    { id: 4, name: "Armario",src: '/armario.png', alt: "armario", price: 149.900, discount: "30% OFF",svg: "" },
    { id: 5, name: "Cortina",src: '/cortina.png', alt: "cortina", price: 69.990, discount: "17% OFF",svg: "/Vector (2).svg"},
    { id: 6, name: "Silla",src: '/silla.png', alt: "silla", price: 210.900 , discount: "32% OFF", svg: ""},
    { id: 7, name: "Microfono",src: '/microfono.png', alt: "microfono", price: 74.990, discount: "25% OFF", svg: "/Vector (2).svg"},
    { id: 8, name: "Afeitadora",src: '/afeitadora.png', alt: "afeitadora", price: 134.950 , discount: "50% OFF", svg: ""},
    { id: 9, name: "Armario",src: '/armario.png', alt: "armario", price: 149.900 , discount: "30% OFF", svg: "" },
    { id: 10, name: "Cortina",src: '/cortina.png', alt: "cortina", price: 69.990 , discount: "17% OFF", svg: "/Vector (2).svg"},
  ];

  return (
    <div>
      <section className="oferta">
        <div className="title-section">
          <h2>Ofertas</h2>
          <a href="">Ver todas</a>
        </div>
        <Slider className='flex justify-between gap-4 ' {...settings}>  
          {products.map((product) =>(
            <Cards key={product.id} product={product} />
          ))}        
        </Slider>
        </section>
    </div>
    );}