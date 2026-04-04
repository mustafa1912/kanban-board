import Home from './pages/Home'
import { ModalProvider } from './context/ModalContext'

// style
import './App.css'

function App() {

  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  )
}

export default App
