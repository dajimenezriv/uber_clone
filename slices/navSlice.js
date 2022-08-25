import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const slice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, { payload }) => {
      return { ...state, origin: payload };
    },
    setDestination: (state, { payload }) => {
      return { ...state, destination: payload };
    },
    setTravelTimeInformation: (state, { payload }) => {
      return { ...state, travelTimeInformation: payload };
    },
  }
});

export const { setOrigin, setDestination, setTravelTimeInformation } = slice.actions;
export default slice.reducer;
