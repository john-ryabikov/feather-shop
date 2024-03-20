import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showCart: false,
    orders: [],
    totalPrice: 0
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setShowCart (state) {
            state.showCart = !state.showCart
        },
        setOrders (state, action) {
            let inArray = false
            state.orders.forEach((el) => {
                if (action.payload.order.id === el.id) {
                    inArray = true
                }
            })
            if (!inArray) {
                state.orders.push({...action.payload.order, count: 1})
                state.totalPrice = state.orders.reduce((sum, order) => {
                    return Number(order.price.replace(/\s/g, '')) + sum
                }, 0)
            } else {
                return
            }
        },
        addOrder (state, action) {
            const findOrder = state.orders.find((obj => obj.id === action.payload.id))
            if (findOrder) {
                findOrder.count++
                state.totalPrice = state.orders.reduce((sum, order) => {
                    return Number(order.price.replace(/\s/g, ''))*order.count + sum
                }, 0)
            } else {
                return
            }
        },
        removeOrder (state, action) {
            const findOrder = state.orders.find((obj => obj.id === action.payload.id))
            if (findOrder && findOrder.count !== 1) {
                findOrder.count--
                state.totalPrice = state.orders.reduce((sum, order) => {
                    return Number(order.price.replace(/\s/g, ''))*order.count + sum
                }, 0) 
            }       
        },    
        setOrdersDelete (state, action) {
            state.orders = state.orders.filter(order => order.id !== action.payload.id)
            state.totalPrice = state.orders.reduce((sum, order) => {
                return Number(order.price.replace(/\s/g, '')) + sum
            }, 0)
        },
        setOrdersClear (state) {
            state.orders = []
            state.totalPrice = 0
        }
    }
});  

export const {setShowCart, setOrders, setOrdersDelete, setOrdersClear, addOrder, removeOrder } = cartSlice.actions;
export default cartSlice.reducer;