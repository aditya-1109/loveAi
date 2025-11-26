import Body from "./components/body"
import Header from "./components/header"
import HeartCursor from "./components/heart"
import Proof from "./components/proof"


function App() {
 
  return (
    <>
     <div className="relative bg-pink-300 flex flex-col justify-start items-center w-[100vw] h-[100vh]">
      <Header />
      <Body />
      <HeartCursor />
     </div>
    </>
  )
}

export default App
