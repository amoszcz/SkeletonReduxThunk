import React, {FC} from 'react';
import {TicketElement} from './TicketElement';
import {useSelector} from "react-redux";
import {useAppSelector} from "../../../app/hooks";

interface TicketsListProps {
  
}

const TicketsListComponent: FC<TicketsListProps> = () => {
    const tickets = useAppSelector(state=>state.ticketsState.tickets)
    return <>
        Lista Ticketów:
        <div>
            {tickets.map(ticket =>
                <TicketElement ticket={ticket}/>
            )}
        </div>
    </>;
};
export const TicketsList = TicketsListComponent;