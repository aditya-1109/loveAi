import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from "./components/body";
import Header from "./components/header";
import InputTaker from "./components/inputTaker";
import Proof from "./components/proof";

const Layout = () => {
  return (
    <div className="relative bg-pink-300 flex flex-col justify-start items-center w-[100vw] h-[100vh]">
      <InputTaker />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/body" element={<Body />} />
      </Routes>
    </Router>
  );
}

export default App;
