import { Guid } from '../../../app/guid';
import { AppThunk } from '../../../app/store';
import { ConfirmCommand } from '../../Confirm/thunks/Confirm.thunk';
import { Confirmed } from '../../Confirm/store/Confirm.store';
import { waitASecond } from '../../../mocks/Mocks';
import { removeTicket } from '../store/Tickets.store';
import { hideLoadingPanel, showLoadingPanel } from '../../LoadingPanel/store/LoadingPanel.state';

export const deleteTicketCommand: (guid: Guid) => AppThunk = (guid) => async (dispatch, getState) => {
    await dispatch(ConfirmCommand());
    const userConfirmed = getState().confirmState.confirmed;
    if (userConfirmed === Confirmed.Yes) {
        dispatch(showLoadingPanel());
        const simulateSaveToBackend = waitASecond;
        await simulateSaveToBackend();
        dispatch(hideLoadingPanel());
        dispatch(removeTicket(guid));
    }
};
