import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./dataSlice"
import { uiReducer } from "./uiSlice"


const store = configureStore({
    reducer: {
        data: dataReducer,
        ui : uiReducer
    }
})


export { store }