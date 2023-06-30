import GlobalProvider from "./Component/GlobalProvider"
import Home from "./Component/Home"
import Modal from "./Component/Modal"
import Sidebar from "./Component/Sidebar"

const App = () => {

  return (
      <GlobalProvider>
    <div className=" h-[100%] w-[100%]">
      <Home />
      <Sidebar />
      <Modal />
    </div>
      </GlobalProvider>
  )
}

export default App