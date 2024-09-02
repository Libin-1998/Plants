import {configureStore} from '@reduxjs/toolkit'
import blogReducer from './reducers/Blogslice'
import plantReducer from './reducers/Plantslice'


export const store=configureStore({
    reducer:{
        blog:blogReducer,
        // plant:plantReducer,
    },
})