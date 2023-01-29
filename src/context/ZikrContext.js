import { createContext, useState } from 'react'
import zikrSound from '../utils/audioUtils/mixkit-light-button-2580.wav'
export const ZikrsContext = createContext({
  zikr: '',
  filterOut: () => {},
  count: 0,
  sideCount: 0,
  handleIncrease: () => {},
  anotherNum: 33,
  setZikr: () => {},
  setAnotherNum: () => {},
  handleButtonReset: () => {},
  handleSoundOff: () => {},
  toggle:'',
})

export const ZikrsProvider = ({ children }) => {
  const [zikr, setZikr] = useState('Zikrlar')
  const [count, setCount] = useState(0)
  const [sideCount, setSideCount] = useState(0)
  const [anotherNum, setAnotherNum] = useState(33)
  const [toggle, setToggle] = useState(true)
  const sound = new Audio(zikrSound)
  //sound function
  const handleSoundOn = () => sound.play()
  const handleSoundOff = () => setToggle(!toggle)
  //inrement number
  let hasNext = count <= anotherNum - 1
  let sideNumIncr = count >= anotherNum

  const handleIncrease = () => {
    if (toggle) {
      handleSoundOn()
    }
    if (hasNext) {
      setCount(count + 1)
    }
    if (sideNumIncr) {
      setSideCount(sideCount + 1)
    }
    if (!hasNext) {
      setCount(0)
    }
  }

  //fiter button
  const filterOut = (id, data, setFnc, setDropdown) => {
    const filtered = data.filter((z) => z.id === id)
    setFnc(filtered.map((zikr) => zikr.title))
    setDropdown(false)
  }

  const handleButtonReset = () => {
    setCount(0)
  }

  const value = {
    toggle,
    handleSoundOff,
    handleButtonReset,
    setAnotherNum,
    setZikr,
    zikr,
    filterOut,
    count,
    sideCount,
    handleIncrease,
    anotherNum,
  }

  return <ZikrsContext.Provider value={value}>{children}</ZikrsContext.Provider>
}
