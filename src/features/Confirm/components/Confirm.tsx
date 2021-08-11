import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../app/hooks';
import { confirmDecision, rejectDecision } from '../store/Confirm.store';

interface ConfirmProps {}

const ConfirmComponent: FC<ConfirmProps> = () => {
    const message = 'Czy na pewno?';
    const dispatch = useDispatch();
    const { visible } = useAppSelector((state) => state.confirmState);
    return (
        <>
            {visible && (
                <div
                    style={{
                        position: 'absolute',
                        width: '306px',
                        height: '114px',
                        background: '#fafafa',
                        border: '1px solid black',
                    }}
                >
                    <span>{message}</span>
                    <div>
                        <button
                            onClick={() => {
                                dispatch(confirmDecision());
                            }}
                        >
                            Tak
                        </button>
                        <button
                            autoFocus={true}
                            onClick={() => {
                                dispatch(rejectDecision());
                            }}
                        >
                            Nie
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
export const Confirm = ConfirmComponent;
