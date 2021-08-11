import React, { FC, useEffect, useRef } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { useDispatch } from 'react-redux';
import { setFocusAddButtonRequired, startNewTicketEdit } from '../store/Tickets.store';

interface AddNewTicketButtonProps {}

const AddNewTicketButtonComponent: FC<AddNewTicketButtonProps> = () => {
    const buttonAdd = useRef<HTMLButtonElement | null>(null);
    const dispatch = useDispatch();
    const { showEdit, focusAddButtonRequired } = useAppSelector((state) => state.ticketsState);
    useEffect(() => {
        if (focusAddButtonRequired) {
            dispatch(setFocusAddButtonRequired(false));
            buttonAdd.current?.focus();
        }
    }, [focusAddButtonRequired]);
    return (
        <>
            <button
                autoFocus={true}
                ref={(btn) => {
                    if (btn) buttonAdd.current = btn;
                }}
                onClick={() => {
                    dispatch(startNewTicketEdit());
                }}
                disabled={showEdit}
            >
                Dodaj nowy ticket
            </button>
        </>
    );
};
export const AddNewTicketButton = AddNewTicketButtonComponent;
