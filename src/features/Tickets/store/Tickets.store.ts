import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Guid } from '../../../app/guid';

export interface Ticket {
    name: string;
    content: string;
    guid: Guid;
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
            guid: Guid.NewGuid(),
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
            state.editedTicket = { ...EmptyTicket, guid: Guid.NewGuid() };
        },
        setFocusAddButtonRequired: (state, action: PayloadAction<boolean>) => {
            state.focusAddButtonRequired = action.payload;
        },
        removeTicket: (state, action: PayloadAction<Guid>) => {
            const ticketIndex = state.tickets.findIndex((el) => el.guid === action.payload);
            if (ticketIndex > -1) state.tickets.splice(ticketIndex, 1);
        },
    },
    initialState: initialTicketsState,
});

export const saveTicket = ticketsSlice.actions.saveTicket;
export const removeTicket = ticketsSlice.actions.removeTicket;
export const changeTicketContent = ticketsSlice.actions.changeTicketContent;
export const changeTicketName = ticketsSlice.actions.changeTicketName;
export const startNewTicketEdit = ticketsSlice.actions.startNewTicketEdit;
export const setFocusAddButtonRequired = ticketsSlice.actions.setFocusAddButtonRequired;
