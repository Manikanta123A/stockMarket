import { createSlice} from '@reduxjs/toolkit'
const initialState = {
    token:""
}
export const secrettoken = createSlice({
    name:"token",
    initialState,
    reducers:{
        addToken:(state,action)=>{
            let newToDo =action.payload
            state.todo = newToDo
        },
        deleteToken: (state,action)=>{
            state.todo = ""
        }
    }
})
export const {addToken , deleteToken} = secrettoken.actions
export default secrettoken.reducer