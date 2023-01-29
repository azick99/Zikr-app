import { useContext } from 'react'
import { ZikrsContext } from '../../context/ZikrContext'

const ButtonNavContainer = () => {
  const { handleButtonReset, handleSoundOff, toggle } = useContext(ZikrsContext)
  return (
    <div>
      <button onClick={handleButtonReset}>Reset</button>
      <button onClick={handleSoundOff}>
        {toggle ? 'switch off' : 'switch on'}
      </button>
    </div>
  )
}

export default ButtonNavContainer
