import { useContext } from 'react'
import { ZikrsContext } from '../../context/ZikrContext'
import Dropdown from '../dropdown/Dropdown'

const CountContainer = () => {
  const { count, sideCount } = useContext(ZikrsContext)
  return (
    <div>
      {count} / <Dropdown title={'countCon'} /> \ x{sideCount}
    </div>
  )
}

export default CountContainer
