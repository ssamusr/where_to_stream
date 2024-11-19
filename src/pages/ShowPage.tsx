import { useParams } from 'react-router-dom'

export const ShowPage = () => {
  const { id } = useParams()

  console.log(id)

  return <div>ShowPage</div>
}
