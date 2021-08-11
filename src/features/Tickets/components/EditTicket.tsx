import React, { FC } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useDispatch } from 'react-redux';
import { changeTicketContent, changeTicketName } from '../store/Tickets.store';
import { saveTicketThunk } from '../thunks/saveTicket.thunk';

interface EditTicketProps {}

const EditTicketComponent: FC<EditTicketProps> = ({}) => {
    const { showEdit, editedTicket } = useAppSelector((state) => state.ticketsState);
    const dispatch = useDispatch();
    return (
        <>
            {showEdit && (
                <>
                    Nazwa:{' '}
                    <input
                        autoFocus={true}
                        value={editedTicket.name}
                        onChange={(e) => {
                            dispatch(changeTicketName(e.target.value));
                        }}
                    />
                    Opis:{' '}
                    <textarea
                        value={editedTicket.content}
                        onChange={(e) => {
                            dispatch(changeTicketContent(e.target.value));
                        }}
                    />
                    <button
                        onClick={async () => {
                            await dispatch(saveTicketThunk());
                        }}
                    >
                        Zapisz
                    </button>
                </>
            )}
        </>
    );
};
export const EditTicket = EditTicketComponent;
