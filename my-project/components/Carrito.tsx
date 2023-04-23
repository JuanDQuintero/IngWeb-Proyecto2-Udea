import React, { useContext, useState } from 'react';
import Modal from '@components/modal/Modal';
import { useCarritoContext } from '@context/CarritoContext';
import { ToastContainer } from 'react-toastify';

export default function Carrito() {
  const [openModal, setOpenModal] = useState(false);
  const { cartItems, removeItem } = useCarritoContext();

  const totalSum = cartItems
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);
  const quantityItems = cartItems.length;

  console.log(cartItems);
  return (
    <div>
      <button onClick={() => setOpenModal(true)} className='flex items-start'>
        <p className='absolute pl-3 text-white'>{quantityItems}</p>
        <svg
          width='30'
          height='27'
          viewBox='0 0 30 27'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0 1.25C0 0.557292 0.557292 0 1.25 0H3.61979C4.76562 0 5.78125 0.666667 6.25521 1.66667H27.6615C29.0312 1.66667 30.0312 2.96875 29.6719 4.29167L27.5365 12.224C27.0938 13.8594 25.6094 15 23.9167 15H8.89062L9.17188 16.4844C9.28646 17.0729 9.80208 17.5 10.401 17.5H25.4167C26.1094 17.5 26.6667 18.0573 26.6667 18.75C26.6667 19.4427 26.1094 20 25.4167 20H10.401C8.59896 20 7.05208 18.7188 6.71875 16.9531L4.03125 2.83854C3.99479 2.64062 3.82292 2.5 3.61979 2.5H1.25C0.557292 2.5 0 1.94271 0 1.25ZM6.66667 24.1667C6.66667 23.8384 6.73133 23.5133 6.85697 23.21C6.9826 22.9066 7.16675 22.631 7.3989 22.3989C7.63105 22.1668 7.90664 21.9826 8.20996 21.857C8.51327 21.7313 8.83836 21.6667 9.16667 21.6667C9.49497 21.6667 9.82006 21.7313 10.1234 21.857C10.4267 21.9826 10.7023 22.1668 10.9344 22.3989C11.1666 22.631 11.3507 22.9066 11.4764 23.21C11.602 23.5133 11.6667 23.8384 11.6667 24.1667C11.6667 24.495 11.602 24.8201 11.4764 25.1234C11.3507 25.4267 11.1666 25.7023 10.9344 25.9344C10.7023 26.1666 10.4267 26.3507 10.1234 26.4764C9.82006 26.602 9.49497 26.6667 9.16667 26.6667C8.83836 26.6667 8.51327 26.602 8.20996 26.4764C7.90664 26.3507 7.63105 26.1666 7.3989 25.9344C7.16675 25.7023 6.9826 25.4267 6.85697 25.1234C6.73133 24.8201 6.66667 24.495 6.66667 24.1667ZM24.1667 21.6667C24.8297 21.6667 25.4656 21.9301 25.9344 22.3989C26.4033 22.8677 26.6667 23.5036 26.6667 24.1667C26.6667 24.8297 26.4033 25.4656 25.9344 25.9344C25.4656 26.4033 24.8297 26.6667 24.1667 26.6667C23.5036 26.6667 22.8677 26.4033 22.3989 25.9344C21.9301 25.4656 21.6667 24.8297 21.6667 24.1667C21.6667 23.5036 21.9301 22.8677 22.3989 22.3989C22.8677 21.9301 23.5036 21.6667 24.1667 21.6667Z'
            fill='black'
          />
        </svg>
      </button>
      <Modal
        open={openModal}
        setOpen={setOpenModal}
        nodalTitle='Carrito de compras'
      >
        <div className='font-mono'>
          <h2 className=' mb-2 border-b-2 text-lg text-gray-900'>
            Productos añadidos al carrito:{' '}
            <span className='text-red-500'>{quantityItems} </span>
          </h2>
          <div className='grid grid-cols-3 gap-3'>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className='border bg-slate-200 '>
                  <h3 className='flex justify-center border'>{item.name}</h3>
                  <img src={item.src} alt={item.alt} />
                  <div className='flex justify-between'>
                    <div className='flex flex-col pl-2 pt-2'>
                      <p className='font-semibold '>
                        Precio:{' '}
                        <span className='text-green-600'>${item.price}</span>
                      </p>
                      <span className='pr-4 '>Cantidad: {}</span>
                    </div>
                    <div className='flex justify-end p-3'>
                      <button
                        className=' font-bold-500 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-700'
                        onClick={() => removeItem(item.id)}
                      >
                        <svg
                          className='text-white-200 h-4 w-4'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Tu carrito está vacío</p>
            )}
          </div>
          <p className='border-b-2 pt-4'>
            Total: <span className='text-green-600'>${totalSum}</span>
          </p>
        </div>
      </Modal>
    </div>
  );
}
