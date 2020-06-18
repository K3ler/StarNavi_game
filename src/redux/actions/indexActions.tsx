import * as api from '../../api/'
import { MAP } from '../constraint'

// Get /game-settings enpoint, and save to store
export const setGameSettigns = () => {

    return (dispatch) => {
        api.getGameSettings((resp) => {

            let data : object = resp.data
            let dataArray: Array<Object> = []

            for( let keys in data) {
                data[keys]['name'] = keys
                dataArray.push(data[keys])
            }
            
            dispatch({
                payload: dataArray,
                type: MAP.SETUP_MODES
            })
        })
    }
}