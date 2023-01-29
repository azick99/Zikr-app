import './App.scss'
import ButtonNavContainer from './components/button-nav/ButtonNavContainer'
import CountContainer from './components/count-container/CountContainer'
import IncrementButton from './components/increment-btn/IncrementButton'
import ZikrsContainer from './components/zikrs/ZikrsContainer'
import { ZikrsProvider } from './context/ZikrContext'

function App() {
  return (
    <ZikrsProvider>
      <div className="App">
        <ZikrsContainer />
        <br />
        <br />
        <br />
        <CountContainer />
        <br />
        <br />
        <IncrementButton />
        <br />
        <br />
        <ButtonNavContainer />
      </div>
    </ZikrsProvider>
  )
}

export default App
