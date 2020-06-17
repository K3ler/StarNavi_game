import { TMap } from "./type"
import { MAP } from "../../constraint"

const initialState: TMap = {
    name: '',
    isGameRunning: false,
    cells: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
    ],
    mapSize: 5,
    delay: null,
    prevCell : [0,0],
    clickedCell : [0,0],
    currentCell : [0,0]
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

        default:
            return state
    }
}

export { Map } 