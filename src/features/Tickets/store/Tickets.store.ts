import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Ticket {
    name: string;
    content:string
}
export interface TicketsState{
    tickets:Ticket[];
}

export const initialTicketsState = {
    tickets:[{
        name:'First Ticket',
        content:'Add more tickets'
    }]
} as TicketsState;
export const ticketsSlice = createSlice({
    name:'TicketsState',
    reducers:{
        addTicket:(state, action:PayloadAction<Ticket>) => {
          state.tickets.push(action.payload);
        }
    },
    initialState:initialTicketsState,
});

export const addTicket = ticketsSlice.actions.addTicket;