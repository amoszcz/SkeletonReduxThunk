import React, {FC} from 'react';
import {Ticket} from "../store/Tickets.store";

interface TicketElementProps {
    ticket: Ticket
}

const TicketElementComponent: FC<TicketElementProps> = ({ticket}) => {
    return <>
        <div>
            Tytuł:<span>{ticket.name}</span>
        </div>
    </>;
};
export const TicketElement = TicketElementComponent;