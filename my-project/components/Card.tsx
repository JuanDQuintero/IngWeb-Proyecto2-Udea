import React from 'react'


interface CardsProps {
    children: JSX.Element;

}

export default function Cards({children}: CardsProps) {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

function handleClick() {
  console.log('clicked')
}