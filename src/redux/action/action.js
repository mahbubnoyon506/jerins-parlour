import { GET_DETAILS } from '../type';
import GetApiDetails from '../../api/axiosRequests';

const Action = () => {
    return function (dispatch) {
        return GetApiDetails().then((res) => {
            console.log(res);
            dispatch({
                type: GET_DETAILS,
                payload: res.data,
            });
        });
    }
}
export default Action;