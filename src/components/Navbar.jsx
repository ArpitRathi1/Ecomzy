import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <div className="flex justify-between items-center w-11/12 h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img src="../../public/logo.png" width="120px" height="50px"></img>
        </div>
      </NavLink>

      <div className="flex items-center font-medium text-slate-100 mr-5 gap-6">
        <NavLink to="/">
          <p className="hover:text-green-600">Home</p>
        </NavLink>

        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl hover:text-green-600"/>
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2  bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
