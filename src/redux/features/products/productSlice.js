import { createSlice } from "@reduxjs/toolkit";

const initialState =[
  
    {
        id:1,
        name:"Casual T-shirt",
        price: 100,
        category:"Gadgets",
        image:"https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ec98e45c-66e6-460a-9e84-1e2fcf9a9a9f/M+NSW+TEE+ICON+FUTURA.png"
    },
    {
        id:2,
        name:"Smartwatch",
        price: 200,
        category:"Gadgets",
        image:"https://m.media-amazon.com/images/I/61ftG19NACL._AC_SL1500_.jpg"
    },
    {
        id:2,
        name:"Smartwatch",
        price: 200,
        category:"Gadgets",
        image:"https://m.media-amazon.com/images/I/61ftG19NACL._AC_SL1500_.jpg"
    }

]



const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct: (state, action)=>{
            // console.log(action.payload)
            state.push({
                id: state.length >0 ? state[state.length-1].id :1,
                ...action.payload
            })

        }
    }
})
export const {addProduct} = productSlice.actions;
export default productSlice.reducer;