import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment , decreament } from '../../Service/Redux/slice/counterSlice';

const Firstpage = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.value);

    const handleIncrement = () =>{
        dispatch(increment())
    }

    const handledDecremen = () =>{
        dispatch(decreament())
    }

    
    return (
        <div className='h-60 w-96 border-yellow-800 bg-red-5000'>
            <h1>{counter}</h1>
            <button className='btn' onClick={handleIncrement} >Increment</button>
            <button className='btn' onClick={handledDecremen} >Decrement</button>
        </div>
    );
};

export default Firstpage;