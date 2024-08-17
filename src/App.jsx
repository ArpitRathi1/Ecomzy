import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <div className="bg-slate-900">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="*" element={<h1 className="flex justify-center items-center h-[100vh] text-3xl font-bold">Page Not Found</h1>}></Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
