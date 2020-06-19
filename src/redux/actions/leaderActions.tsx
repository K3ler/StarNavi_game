import * as api from '../../api'
import { LEADERS } from '../constraint'

// Get /winners endpoint and save to store
export const getLeaders = () => {

    return (dispatch) => {
        api.getLeaders((resp) => {

            dispatch({
                payload: resp.data.reverse(),
                type: LEADERS.GET_LEADERS
            })
        })
    }
}
// Update Leaders Board
export const setLeaders = (leaders: Array<{}>) => {

    return {
        payload: leaders,
        type: LEADERS.SET_LEADERS
    }
        
}