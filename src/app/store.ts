import {configureStore, ThunkAction, Action, applyMiddleware, combineReducers, createStore} from '@reduxjs/toolkit';
import counterReducer, {CounterState} from '../features/counter/counterSlice';
import thunk from "redux-thunk";
import {ticketsSlice, TicketsState} from "../features/Tickets/store/Tickets.store";

export interface AppState {
    counter: CounterState;
    ticketsState:TicketsState
}

export const appStateReducer = combineReducers<AppState,TypeThunkAction>({
    counter: counterReducer,
    ticketsState:ticketsSlice.reducer
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

