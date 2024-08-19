import { MdDelete } from "react-icons/md";  
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import { toast } from "react-hot-toast";

function CartItem({item, itemIndex}){

    const dispatch = useDispatch()

    function removeFromCart(){
        dispatch(remove(item.id))
        toast.error("Item removed")
    }

    return (
        <div className="CartItem">
            <div>
                <img className="cart-img" src={item.image}></img>
            </div>
            <div className="cart-title-desc-container">
                <h1 className="cart-title">{item.title}</h1>
                <h1 className="cart-desc">{item.description}</h1>
                <div className="cart-price-icon-container">
                    <p className="cart-price">${item.price}</p>
                    <div className="icon-div" onClick={removeFromCart}>
                        <MdDelete className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem