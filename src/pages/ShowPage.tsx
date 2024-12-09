import React from 'react'
import { useParams } from 'react-router-dom'

export const ShowPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  console.log('aqui')
  return (
    <section>
      <h1>Show</h1>
      <p>{id}</p>
    </section>
  )
}
