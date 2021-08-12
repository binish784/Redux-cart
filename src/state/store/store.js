import thunk from "redux-thunk";
import reducers from "../reducers/index.reducer";
import { applyMiddleware, createStore } from "redux";

const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)

export default store;