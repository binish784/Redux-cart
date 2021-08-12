import items from "../seed/data.seed";
import { useDispatch, useSelector } from "react-redux";

import PageWrapper from "../styled/app/page.wrapper";

import {AddToCart, ItemCard, ItemImage, ItemPrice, ItemTitle} from "../styled/items/card.styled";
import ItemWrapper from "../styled/items/wrapper.styled";
import ItemsList from "../components/items/ItemsList";
import ItemCart from "../components/itemCart/itemCart";


const Homepage = (props) =>{

    const cart = useSelector((state)=>state);
    console.log(cart);

    return <PageWrapper>
        Welcome to Redux-Cart
        
        <ItemsList items = {items} />
        <ItemCart />

    </PageWrapper>
}

export default Homepage;