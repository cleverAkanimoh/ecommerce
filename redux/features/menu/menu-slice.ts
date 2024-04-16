// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "@/redux/store";

// // Define a type for the slice state
// export interface MenuState {
//   isClicked: boolean;
// }

// // Define the initial state using that type
// const initialState: MenuState = {
//   isClicked: false,
// };

// export const menuSlice = createSlice({
//   name: "menu",
//   initialState,
//   reducers: {
//     toggle: (state) => !state,
//     incrementByAmount: (state, action: PayloadAction<boolean>) => {
//       state.isClicked = action.payload;
//     },
//   },
// });

// export const { toggle } = menuSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.menu.isClicked;

// export default menuSlice.reducer;
