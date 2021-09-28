import { createStore } from "redux";

import Reducer from "./Reducers";

const store = createStore(
    Reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //TODO: Uncomment the devtool extention before deployment
);

export default store;