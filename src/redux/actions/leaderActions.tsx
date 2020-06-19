import * as api from '../../api'
import { LEADERS } from '../constraint'
import { toast } from 'react-toastify'

// Get /winners endpoint and save to store
export const getLeaders = () => {

    return (dispatch) => {

        dispatch(setLeadersStatus(true))

        api.getLeaders((resp) => {

            if (resp.status === 200) {
                
                dispatch(setLeadersStatus(false))

                dispatch({
                    payload: resp.data.reverse(),
                    type: LEADERS.GET_LEADERS
                })
            } else {
                toast.error("Error, check our connection")
            }
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

export const setLeadersStatus = (status: boolean) => {

    return {
        payload: status,
        type: LEADERS.LEADERS_STATUS
    }
}