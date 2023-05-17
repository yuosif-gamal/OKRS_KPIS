import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {
    allUsersReducer,
    forgotPasswordReducer,
    profileReducer,
    userDetailsReducer,
    userReducer
} from './reducers/userReducer';
import {
    newProductReducer,
    newReviewReducer,
    productDetailsReducer,
    productReducer,
    productReviewsReducer,
    productsReducer,
    reviewReducer
} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';
import {saveForLaterReducer} from './reducers/saveForLaterReducer';
import {
    allOrdersReducer,
    myOrdersReducer,
    newOrderReducer,
    orderDetailsReducer,
    orderReducer,
    paymentStatusReducer
} from './reducers/orderReducer';
import {wishlistReducer} from './reducers/wishlistReducer';
import {
    collectionsReducer,
    currentSetupDateReducer, financeReducer,
    humanResourcesReducer,
    infrastructureReducer, processingReducer
} from "./reducers/libraryReducer";

const reducer = combineReducers({
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    products: productsReducer,
    productDetails: productDetailsReducer,
    newReview: newReviewReducer,
    cart: cartReducer,
    saveForLater: saveForLaterReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    paymentStatus: paymentStatusReducer,
    orderDetails: orderDetailsReducer,
    allOrders: allOrdersReducer,
    order: orderReducer,
    newProduct: newProductReducer,
    product: productReducer,
    users: allUsersReducer,
    userDetails: userDetailsReducer,
    reviews: productReviewsReducer,
    review: reviewReducer,
    wishlist: wishlistReducer,
    infrastructure: infrastructureReducer,
    collections : collectionsReducer,
    humanResources: humanResourcesReducer,
    processing :processingReducer,
    finance: financeReducer,
    currentSetupDate : currentSetupDateReducer
});

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
    saveForLater: {
        saveForLaterItems: localStorage.getItem('saveForLaterItems')
            ? JSON.parse(localStorage.getItem('saveForLaterItems'))
            : [],
    },
    wishlist: {
        wishlistItems: localStorage.getItem('wishlistItems')
            ? JSON.parse(localStorage.getItem('wishlistItems'))
            : [],
    },
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;