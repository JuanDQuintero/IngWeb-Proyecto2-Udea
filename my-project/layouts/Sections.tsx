import Carrusel from '@components/Sections/Carrusel'
import Novedades from '@components/Sections/Novedades'
import Pagos from '@components/Sections/Pagos'
import Sec9 from '@components/Sections/Sec9'
import React from 'react'

export default function Sections() {
  return (
    <div>
        <Novedades />
        <article>
            <Pagos />
            <Carrusel />
            
        </article>
        <Sec9 />
    </div>
  )
}
