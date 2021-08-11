import { createSlice } from '@reduxjs/toolkit';

export enum Confirmed {
    NoDecision,
    Yes,
    No,
}
export interface ConfirmState {
    confirmed: Confirmed;
    visible: boolean;
}

export const confirmInitialState = {
    confirmed: Confirmed.NoDecision,
} as ConfirmState;

const confirmSlice = createSlice({
    name: 'ConfirmState',
    initialState: confirmInitialState,
    reducers: {
        showConfirm: (state) => {
            state.visible = true;
            state.confirmed = Confirmed.NoDecision;
        },
        confirmDecision: (state) => {
            state.confirmed = Confirmed.Yes;
            state.visible = false;
        },
        rejectDecision: (state) => {
            state.confirmed = Confirmed.No;
            state.visible = false;
        },
    },
});
export const confirmReducer = confirmSlice.reducer;
export const showConfirm = confirmSlice.actions.showConfirm;
export const confirmDecision = confirmSlice.actions.confirmDecision;
export const rejectDecision = confirmSlice.actions.rejectDecision;
