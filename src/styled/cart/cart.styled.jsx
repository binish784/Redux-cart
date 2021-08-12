import { Image } from "react-bootstrap";
import styled from "styled-components";

const CartPrice = styled.div`
    font-weight:600;
    font-size:20px;
`

const CartWrapper = styled.div`

`

const CartItemWrapper = styled.div`
    display:flex;
    margin:20px 0px;
    flex-wrap:wrap;
`

const CartItem = styled.div`
    margin: 0px 15px;
    &:hover{
        & img {
            transform:scale(1.05);
        }
    }
`

const CartItemImage = styled(Image)`
    max-height:130px;
    transition: transform 0.5s;
`


export  {CartPrice,CartWrapper,CartItemWrapper,CartItem,CartItemImage};