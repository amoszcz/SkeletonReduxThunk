import { configureStore, ThunkAction, Action, applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import { ticketsSlice, TicketsState } from '../features/Tickets/store/Tickets.store';
import { loadingPanelSlice, LoadingPanelState } from '../features/LoadingPanel/store/LoadingPanel.state';
import { confirmReducer, ConfirmState } from '../features/Confirm/store/Confirm.store';

export interface AppState {
    ticketsState: TicketsState;
    loadingPanelState: LoadingPanelState;
    confirmState: ConfirmState;
}

export const appStateReducer = combineReducers<AppState, TypeThunkAction>({
    ticketsState: ticketsSlice.reducer,
    loadingPanelState: loadingPanelSlice.reducer,
    confirmState: confirmReducer,
});
export const store = configureStore<AppState, TypeThunkAction>({
    reducer: appStateReducer,
    middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;
export interface TypeThunkAction extends AppThunk {
    type: void;
}
