import { Navbar } from "./components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./components/MainPage";
import { GiftsPage } from "./components/GiftsPage";
import Body from "./components/body";


function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-red-50 to-pink-100 relative overflow-hidden">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />  {/* this renders child routes */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="gifts" element={<GiftsPage />} />
        </Route>

        <Route path="/body/:id" element={<Body />} />
      </Routes>
    </Router>
  );
}