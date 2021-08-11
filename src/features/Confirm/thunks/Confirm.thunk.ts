import { AppThunk } from '../../../app/store';
import { Confirmed, showConfirm } from '../store/Confirm.store';
import { waitUntil } from '../../../app/waitUntil';

export const ConfirmCommand: () => AppThunk = () => async (dispatch, getState) => {
    dispatch(showConfirm());
    await waitUntil(() => getState().confirmState.confirmed !== Confirmed.NoDecision);
};
