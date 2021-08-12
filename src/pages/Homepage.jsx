import items from "../seed/data.seed";
import PageWrapper from "../styled/app/page.wrapper";
import ItemsList from "../components/items/ItemsList";
import ItemCart from "../components/itemCart/itemCart";

const Homepage = (props) =>{
    return <PageWrapper>
        Welcome to Redux-Cart
        <ItemsList items = {items} />
        <ItemCart />
    </PageWrapper>
}

export default Homepage;