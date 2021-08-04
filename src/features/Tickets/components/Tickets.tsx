import React, {FC} from 'react';
import {TicketsList} from './TicketsList';
import {useDispatch} from "react-redux";
import {startNewTicketEdit} from "../store/Tickets.store";
import { EditTicket } from './EditTicket';
import {useAppSelector} from "../../../app/hooks";


interface TicketsProps {
}

const TicketsComponent: FC<TicketsProps> = () => {
    
    const dispatch = useDispatch();
    const showEdit = useAppSelector(state=>state.ticketsState.showEdit)
    return <>
        <TicketsList />
        <EditTicket />
        <button onClick={()=>{
            dispatch(startNewTicketEdit())
        }} disabled={showEdit} >Dodaj nowy ticket</button>
    </>;
};
export const Tickets = TicketsComponent;