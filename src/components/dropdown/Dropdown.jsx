import { Fragment, useContext, useState } from 'react'
import { ZikrsContext } from '../../context/ZikrContext.js'
import { zikrNum, zikrsList } from '../../data/data.js'
import './dropdown-zikr-list.style.scss'
const Dropdown = ({ title, contents }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const { zikr, anotherNum, setZikr, filterOut, setAnotherNum } =
    useContext(ZikrsContext)
  const handleDropdown = () => setIsDropdownOpen(!isDropdownOpen)

  if (title === 'zikrCon') {
    return (
      <Fragment>
        <div onClick={handleDropdown}>{zikr}</div>
        {isDropdownOpen && (
          <div className="zikr-list">
            <ul>
              {zikrsList.map((zikr) => (
                <li
                  key={zikr.id}
                  onClick={() =>
                    filterOut(zikr.id, zikrsList, setZikr, setIsDropdownOpen)
                  }
                >
                  {zikr.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Fragment>
    )
  }
  if (title === 'countCon') {
    return (
      <Fragment>
        <span onClick={handleDropdown}>{anotherNum}</span>
        {isDropdownOpen && (
          <ul>
            {zikrNum.map((num) => (
              <li
                key={num.id}
                onClick={() =>
                  filterOut(num.id, zikrNum, setAnotherNum, setIsDropdownOpen)
                }
              >
                {num.title}
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    )
  }
}

export default Dropdown
