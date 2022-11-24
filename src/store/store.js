import { HTTP } from "../service/http-common";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const useSlice = createSlice({
    name: 'store',
    initialState: {
        token: '',
        roles: [],
        permission: [],
        count: 0,
        user: {
            id: '',
            name: '',
            login: ''
        }
    },
    reducers: {
        // login: (username,password) => {
        //     const loginReq = {
        //         employee_id: username,
        //         password: password
        //     }
        //     HTTP.post("auth/v1/login", loginReq).then(res => {
        //         console.log('State', res);
        //     })
        // }
        increment: state => {
            state.count +=1;
            console.log('Test');
        },
        decrement: state => {
            state.count -=1;
        }
    }
})

export const {
    login
} = useSlice.actions

export default useSlice.reducer
