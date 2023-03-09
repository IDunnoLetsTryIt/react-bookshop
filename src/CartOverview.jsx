import { useContext } from "react";
import Context from "./Context";

export default function CartOverview(){
    const {Context: {shoppingCart}} = useContext(Context);

    return (
        <div className="cart-overview">
            Items in cart: {shoppingCart.length}
        </div>
    )
}