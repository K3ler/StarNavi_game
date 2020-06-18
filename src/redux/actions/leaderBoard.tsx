import * as api from '../../api/'
import { LEADERS } from '../constraint'

export const getLeaders = () => {

    return (dispatch) => {
        api.getLeaders((resp) => {

            dispatch({
                payload: resp.data,
                type: LEADERS.GET_LEADERS
            })
        })
    }
}