import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Jack Jones" },
  { id: "1", name: "Nill Tiller" },
  { id: "2", name: "Katty Rouse" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
