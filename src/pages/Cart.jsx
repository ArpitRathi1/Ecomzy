import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

function Cart(){

    const cart = useSelector((state) => state.cart)
    const [totalAmmount, setTotalAmmount] = useState(0)

    useEffect(() => {
        setTotalAmmount( cart.reduce((acc, curr) => acc + curr.price, 0))
    },[cart])

    return(
        <div>
            {
                cart.length > 0 ? 
                (<div className="Cart">
                    <div>
                        {
                            cart.map((item,index)=>{
                                return <CartItem key={item.id} item={item} itemIndex={index}></CartItem>
                            })
                        }
                    </div>
                    <div className="summary-container">
                        <div>
                            <div className="your-cart">Your Cart</div>
                            <div className="summary">Summary</div>
                            <p className="total-item">Total Item : {cart.length}</p>
                        </div>

                        <div className="total-checkout-container">
                            <p className="total-amm">Total ammount : ${totalAmmount}</p>
                            <button className="checkout-btn">Checkout Now</button>
                        </div>

                    </div>
                </div>) :
                (<div className="emptycart">
                    <h1 className="empty-heading">Your Cart is Empty</h1>
                    <NavLink to="/">
                        <button className="checkout-btn">Shop Now</button>
                    </NavLink>
                </div>)
            }
        </div>
    )
}

export default Cart