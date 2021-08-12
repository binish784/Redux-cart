import ItemWrapper from "../../styled/items/wrapper.styled";
import { ItemCard, ItemTitle, ItemPrice, AddToCart, ItemImage } from "../../styled/items/card.styled";
import { useDispatch } from "react-redux";
import { addToCart } from "../../state/actions/cart.actions";

const ItemsList = ({items}) =>{

    const dispatch = useDispatch();
    
    const handleItemAdd = (item) =>{
        dispatch(addToCart(item));
    }

    return <ItemWrapper>
        {items.map((item,index)=>{
            return <ItemCard key={item.name+index}>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemImage fluid src= {item.image}></ItemImage>
                <ItemPrice>{item.price} {item.unit}</ItemPrice>
                <AddToCart onClick={(e)=>handleItemAdd(item)}>Add To Cart</AddToCart>
            </ItemCard>
        })}
    </ItemWrapper>
}

export default ItemsList;