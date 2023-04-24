import Carrusel from '@components/Sections/Carrusel'
import Novedades from '@components/Sections/Novedades'
import Pagos from '@components/Sections/Pagos'
import Sec3 from '@components/Sections/Suscripcion'
import Sec4 from '@components/Sections/Beneficios'
import Sec5 from '@components/Sections/Descubre'
import Sec6 from '@components/Sections/Tiendas'
import Sec7 from '@components/Sections/Supermercados'
import Sec8 from '@components/Sections/Categorias'
import Sec9 from '@components/Sections/ExtFooter'
import React from 'react'

export default function Sections() {
  return (
    <div>
        <Novedades />
        <article >
            <Pagos />
            <Carrusel />
            <Sec3 />
            <Sec4 />
            <Sec5 />
            <Sec6 />
            <Sec7/>
            <Sec8/>
        </article>
        <Sec9 />
    </div>
  )
}
