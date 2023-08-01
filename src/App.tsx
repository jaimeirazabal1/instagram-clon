import { useState } from 'react'
import { InitialLogo } from './components/InitialLogo'
import { Dashboard } from './components/Dashboard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [initInstagram, setInit] = useState<Boolean>(false);
  return (
      initInstagram ? <Dashboard /> : <InitialLogo init={setInit}/>
  )
}

export default App
