import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../state/actions/cart.actions";
import {CartItem, CartItemImage, CartItemWrapper, CartPrice,CartWrapper} from "../../styled/cart/cart.styled";
import { ItemPrice, ItemTitle } from "../../styled/items/card.styled";

const ItemCart = () =>{
    
    const dispatch = useDispatch();
    const cart = useSelector((state)=>state.cart);

    const handleRemoveItem = (itemId) =>{
        dispatch(removeFromCart(itemId));        
    }

    return <CartWrapper>
        <CartPrice>Cart  : {cart.total} NPR</CartPrice>
        <CartItemWrapper>
            {cart.items.map((item,index)=>{
                return <CartItem key={item.name+index+item.id} onClick={(e)=>handleRemoveItem(item.id)}>
                    <ItemTitle>{item.name}</ItemTitle>
                    <CartItemImage fluid src= {item.image}></CartItemImage>
                    <ItemPrice>{item.price} {item.unit}</ItemPrice>
                </CartItem>
            })}
        </CartItemWrapper>
    </CartWrapper>
}

export default ItemCart;