import styled from "styled-components";
import { Button, Image } from "react-bootstrap";

const ItemCard = styled.div`
    position:relative;
    padding-bottom:60px;
    &:hover{
        & img {
            transform:scale(1.1);
        }

        & button {
            bottom: 20px;
            opacity : 1;
        }
    }
`

const ItemTitle = styled.div`
    font-weight:600;
    margin-bottom:20px;
`

const ItemImage = styled(Image)`
    max-height: 200px;
    margin-bottom:20px;
    transition: transform 0.5s;
`

const ItemPrice = styled.p`

`

const AddToCart  = styled(Button)`
    position:absolute;
    width:100%;
    left:50%;
    transform:translateX(-50%);
    opacity : 0;
    bottom:0;
    transition : bottom 0.5s, opacity 0.8s;
    transition : ;
`

export {ItemCard,ItemTitle,ItemImage,ItemPrice,AddToCart};