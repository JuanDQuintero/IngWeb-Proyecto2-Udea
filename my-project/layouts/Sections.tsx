import Carrusel from '@components/Sections/Carrusel'
import Novedades from '@components/Sections/Novedades'
import Pagos from '@components/Sections/Pagos'
import Sec3 from '@components/Sections/Sec3'
import Sec4 from '@components/Sections/Sec4'
import Sec5 from '@components/Sections/Sec5'
import Sec9 from '@components/Sections/Sec9'
import React from 'react'

export default function Sections() {
  return (
    <div>
        <Novedades />
        
        <article>
            <Pagos />
            <Carrusel />
            <Sec3 />
            <Sec4 />
            <Sec5 />
        </article>
        <Sec9 />
    </div>
  )
}
