import { useContext } from 'react'
import { ZikrsContext } from '../../context/ZikrContext'
const IncrementButton = () => {
  const { handleIncrease } = useContext(ZikrsContext)
  return <button onClick={handleIncrease}>IncrementButton</button>
}

export default IncrementButton
