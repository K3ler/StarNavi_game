import { TMap } from "./type"
import { MAP } from "../../enums"

const initialState: TMap = {
    name: '',
    isRunning: false,
    cells: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],]
}

const Map = (state = initialState, action: any) => {

    switch (action.type) {
        case MAP.GENERATE_MAP:
            return {
                ...state,
                cells: action.payload
            }
        default:
            return state
    }
}

export { Map } 