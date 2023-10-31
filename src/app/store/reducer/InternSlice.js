import { createSlice } from "@reduxjs/toolkit";

const initialData = localStorage.getItem("internData");
const initialState = {
  allInterns: initialData ? JSON.parse(initialData) : [],
};

const InternSlice = createSlice({
  name: "interns",
  initialState,
  reducers: {
    addIntern(state, action) {
      console.log(action);
      state.allInterns.push(action.payload);
      localStorage.setItem("internData", JSON.stringify(state.allInterns));
    },
    updateIntern(state, action) {

      const internIndex = state.allInterns.findIndex((intern) => intern.id === action.payload.id);
      console.log(internIndex);

      if (internIndex !== -1) {
        state.allInterns[internIndex] = { ...state.allInterns[internIndex], ...action.payload };
        localStorage.setItem("internData", JSON.stringify(state.allInterns));
      }
    },
    deleteIntern(state, action) {
      const idToDelete = action.payload;
      state.allInterns = state.allInterns.filter((intern) => intern.id !== idToDelete);
      localStorage.setItem("internData", JSON.stringify(state.allInterns));
    },
  },
});

export const { addIntern, updateIntern, deleteIntern } = InternSlice.actions;
export default InternSlice.reducer;