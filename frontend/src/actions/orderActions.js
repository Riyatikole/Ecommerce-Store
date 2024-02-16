import axios from "axios";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,

  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    const authTokensString = localStorage.getItem("authTokens");
    const authTokens = JSON.parse(authTokensString);

    const accessToken = authTokens.access;

    const { data } = await axios.post("/api/orders/add/", order, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
    try{
        dispatch({
            type: ORDER_PAY_REQUEST
        })

        const authTokensString = localStorage.getItem("authTokens");
    const authTokens = JSON.parse(authTokensString);

    const accessToken = authTokens.access;

        const { data } = await axios.put(`/api/orders/${id}/pay`, paymentResult, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          });
      
          dispatch({
            type: ORDER_PAY_SUCCESS,
            payload: data,
          });

    } catch (error) {
        dispatch({
          type: ORDER_PAY_FAIL,
          payload:
            error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message,
        });
      }
}
