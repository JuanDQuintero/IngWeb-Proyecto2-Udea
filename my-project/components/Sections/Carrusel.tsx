import Cards from '@components/Card';
import React from 'react';
import Slider from 'react-slick';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Carrusel = ()  => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

 const products = [
    {
      id: 1,
      name: 'Silla',
      src: '/silla.png',
      alt: 'silla',
      price: 210.9,
      discount: '32% OFF',
      svg: '',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Microfono',
      src: '/microfono.png',
      alt: 'microfono',
      price: 74.99,
      discount: '25% OFF',
      svg: '/Vector (2).svg',
      quantity: 0,
    },
    {
      id: 3,
      name: 'Afeitadora',
      src: '/afeitadora.png',
      alt: 'afeitadora',
      price: 134.95,
      discount: '50% OFF',
      svg: '',
      quantity: 0,
    },
    {
      id: 4,
      name: 'Armario',
      src: '/armario.png',
      alt: 'armario',
      price: 149.9,
      discount: '30% OFF',
      svg: '',
      quantity: 0,
    },
    {
      id: 5,
      name: 'Cortina',
      src: '/cortina.png',
      alt: 'cortina',
      price: 69.99,
      discount: '17% OFF',
      svg: '/Vector (2).svg',
      quantity: 0,
    },
    {
      id: 6,
      name: 'Botiquin',
      src: '/botiquin.webp',
      alt: 'botiquin',
      price: 99.9,
      discount: '30% OFF',
      svg: '',
      quantity: 0,
    },
    {
      id: 7,
      name: 'Auriculares',
      src: '/Auriculares.webp',
      alt: 'Auriculares',
      price: 20.5,
      discount: '20% OFF',
      svg: '/Vector (2).svg',
      quantity: 0,
    },
    {
      id: 8,
      name: 'Airfrier',
      src: '/Airfrier.webp',
      alt: 'Airfrier',
      price: 200.95,
      discount: '50% OFF',
      svg: '',
      quantity: 0,
    },
    {
      id: 9,
      name: 'Mouse',
      src: '/Mouse.webp',
      alt: 'Mouse',
      price: 49.9,
      discount: '10% OFF',
      svg: '',
      quantity: 0,
    },
    {
      id: 10,
      name: 'Camiseta',
      src: '/Camiseta.webp',	
      alt: 'Camiseta',
      price: 20.99,
      discount: '10% OFF',
      svg: '/Vector (2).svg',
      quantity: 0,
    },
  ];
  

  return (
    <div>
      <section className='oferta'>
        <div className='title-section flex items-baseline gap-3'>
          <h2>Ofertas</h2>
          <a href='/Ofertas'>Ver todas</a>
        </div>
        <Slider className='flex justify-between gap-6 ' {...settings}>
          {products.map((product) => (
            <Cards key={product.id} product={product} />
          ))}
        </Slider>
        <ToastContainer
          position='top-center'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />
      </section>
    </div>
  );
}


export default Carrusel;