import {createSlice} from "@reduxjs/toolkit"

const STATUSES=Object.freeze({
    IDLE:"idle",
    ERROR:"error",
    LOADING:"loading"
})


const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],
        status:""
    },
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state,action){
            return state.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {add,remove}=productSlice.actions
export default productSlice.reducer