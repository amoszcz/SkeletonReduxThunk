import React, {FC} from 'react';
import {TicketsList} from './TicketsList';

interface TicketsProps {
}

const TicketsComponent: FC<TicketsProps> = () => {
    return <>
        <TicketsList/>
    </>;
};
export const Tickets = TicketsComponent;