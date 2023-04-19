import Carrusel from '@components/Sections/Carrusel'
import Novedades from '@components/Sections/Novedades'
import Pagos from '@components/Sections/Pagos'
import Suscripcion from '@components/Sections/Suscripcion'
import React from 'react'

export default function Sections() {
  return (
    <div>
        <Novedades />
        <article>
            <Pagos />
            <Carrusel />
            <Suscripcion />
        </article>
        
    </div>
  )
}
