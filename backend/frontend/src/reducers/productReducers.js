import { PRODUCT_LIST_SUCCESS, PRODUCT_LIST_REQUEST, PRODUCT_LIST_FAIL, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_FAIL } from "../constants/productConstants";

export const productListReducer = (state = { products: [], loading: false, error: null }, action) => {
    switch(action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true, error: null };

        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, products: action.payload};

        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export const productDetailsReducer = (state = { products: {reviews:[]}, loading: false, error: null }, action) => {
    switch(action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true, error: null };

        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload};

        case PRODUCT_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};
