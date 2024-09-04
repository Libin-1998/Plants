import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    blogdata:[],
    status:'idle',
}
const token=sessionStorage.getItem('token')

export const postData=createAsyncThunk('blogs/post',async(item)=>{
    console.log(item);

    const datas = await axios.post('https://plants-96s1.onrender.com/api/blogs/addblog',item, {
        headers: {Authorization:`Bearer ${token}`},
    });
    


     const result=await datas.data.data
     console.log(result);
     return(result)

})

export const BlogSlice=createSlice({
    name:'blog',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(postData.pending,(state,action)=>{
            state.status='loading'
        })
        .addCase(postData.fulfilled,(state,action)=>{
            state.status='idle'
            state.profileData=action.payload
            console.log(action.payload);
        })
        .addCase(postData.rejected,(state,action)=>{
            state.status='error'
        })
    }
})
export default BlogSlice.reducer