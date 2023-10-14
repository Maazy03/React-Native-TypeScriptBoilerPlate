import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {serviceApi} from '../services';
import { RootState } from '..';


type StateI = {
  isOnBoard: boolean;
  inOnCoachSelected: boolean;
  selectedLanguage: string;
};

const initialState : StateI = {
  isOnBoard: false,
  inOnCoachSelected: false,
  selectedLanguage: 'en',
};

const commonSlice = createSlice({
  name: 'common',
  initialState: initialState,
  reducers: {
    onBoardCompleted: (state, {payload}) =>  {
      state.isOnBoard = true;
    },
    clearCommon: (state, {payload}) => {
      state.inOnCoachSelected = false;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      serviceApi.endpoints.logout.matchFulfilled,
      (state, {payload}) => {
        state.inOnCoachSelected = false;
      },
    );
  },
});

export const {onBoardCompleted, clearCommon} = commonSlice.actions;

export const commonSelector = (state: RootState) => state.common;


export default commonSlice.reducer;
