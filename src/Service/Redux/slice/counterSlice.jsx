import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0,
    name: 'test',
    number: 0
}

export const counterSlice = createSlice (
    {
        name : "counter",
        initialState,
        reducers: {
            increment: (state) => {
                state.value += 1
            },
            decreament : (state) => {
                state.value -= 1
            }
        }
    }
)

export const { increment , decreament } = counterSlice.actions
export default counterSlice.reducer





