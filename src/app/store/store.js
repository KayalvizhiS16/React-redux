import { configureStore } from '@reduxjs/toolkit';
import InternSlice from '../store/reducer/InternSlice'; 

export const store=configureStore({
    reducer:{
        interns:InternSlice,
    }
})