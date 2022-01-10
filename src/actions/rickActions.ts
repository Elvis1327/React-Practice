import { TYPES } from '../TYPES/TYPES';
import { getRickDataFetch } from '../helpers/rickDataHelper';


const rickData = (data: any) => {
    return {
        type: TYPES.RickData,
        payload: data
    }
}

export const rickDataAction = () => {
    return async (dispatch: any) => {
        const resp = await getRickDataFetch();
        dispatch(rickData(resp));
    }
}