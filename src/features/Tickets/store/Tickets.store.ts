import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Ticket {
    name: string;
    content: string;
}

export const EmptyTicket = { content: '', name: '' } as Ticket;

export interface TicketsState {
    tickets: Ticket[];
    editedTicket: Ticket;
    showEdit: boolean;
    focusAddButtonRequired: boolean;
}

export const initialTicketsState = {
    tickets: [
        {
            name: 'First Ticket',
            content: 'Add more tickets',
        },
    ],
    editedTicket: EmptyTicket,
    showEdit: false,
    focusAddButtonRequired: false,
} as TicketsState;
export const ticketsSlice = createSlice({
    name: 'TicketsState',
    reducers: {
        saveTicket: (state, action: PayloadAction<Ticket>) => {
            state.tickets.push(action.payload);
            state.editedTicket = EmptyTicket;
            state.showEdit = false;
        },
        changeTicketName: (state, action: PayloadAction<string>) => {
            state.editedTicket.name = action.payload;
        },
        changeTicketContent: (state, action: PayloadAction<string>) => {
            state.editedTicket.content = action.payload;
        },
        startNewTicketEdit: (state) => {
            state.showEdit = true;
            state.editedTicket = EmptyTicket;
        },
        setFocusAddButtonRequired: (state, action: PayloadAction<boolean>) => {
            state.focusAddButtonRequired = action.payload;
        },
    },
    initialState: initialTicketsState,
});

export const saveTicket = ticketsSlice.actions.saveTicket;
export const changeTicketContent = ticketsSlice.actions.changeTicketContent;
export const changeTicketName = ticketsSlice.actions.changeTicketName;
export const startNewTicketEdit = ticketsSlice.actions.startNewTicketEdit;
export const setFocusAddButtonRequired = ticketsSlice.actions.setFocusAddButtonRequired;
