import { TMap } from "./type"
import { MAP } from "../../constraint"

const initialState: TMap = {
    isGameRunning: false,
    cells: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    mapSize: 5,
    modes: [],
    delay: null,
    currentDelay: null,
    prevCell : [0,0],
}

const Map = (state = initialState, action: any) => {

    switch(action.type) {

        case MAP.GENERATE_MAP:
            return {
                ...state,
                cells : action.payload.cells,
                mapSize : action.payload.size,
            }

        case MAP.CHANGE_DELAY:
            return {
                ...state,
                delay: action.payload
            }

        case MAP.CHANGE_VALUE:           
            return {
                ...state,
                cells: action.payload
            }

        case MAP.PREV_CELL:
            return {
                ...state,
                prevCell: action.payload
            }

        case MAP.SETUP_MODES:
            return {
                ...state,
                modes: action.payload
            }
        case MAP.SET_GAME_MODE:
            return {
                ...state,
                currentDelay: action.payload.delay,
                mapSize: action.payload.mapSize 
            }
        case MAP.SET_GAME_STATE:
            return {
                ...state,
                isGameRunning : action.payload
            }

        default:
            return state
    }
}

export { Map } 