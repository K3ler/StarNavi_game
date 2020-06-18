import { MAP } from "../constraint"


// Generate Matrix with asociated arrays
export const generateMapField = (size: number) => {

    let cells = [...Array(size).fill(Array(size).fill(0))]

    return {
        payload: {
            cells,
            size
        },
        type: MAP.GENERATE_MAP
    }
}

// Change interval delay, that change game speed
export const changeDelay = (delay: number) => {

    return {
        payload: delay,
        type: MAP.CHANGE_DELAY
    }
}

export const changeValue = (y, x, value) => {

    return (dispatch, getState) => {

        let copyCells = JSON.parse(JSON.stringify(getState().map.cells))
        copyCells[y][x] = value

        dispatch({
            payload: copyCells,
            type: MAP.CHANGE_VALUE
        })
    }
}

export const setPrevCell = (y: number, x: number) => {
    return {
        payload: [y, x],
        type: MAP.PREV_CELL
    }
}

export const setGameMode = (index: number) => {

    return (dispatch, getState) => {

        if (index === -1) {
            index = 0
        }

        let modes = getState().map.modes[index]
        let delay = modes.delay
        let fieldSize = modes.field

        dispatch({
            payload: {
                delay: delay,
                mapSize: fieldSize
            },
            type: MAP.SET_GAME_MODE
        })

        dispatch(generateMapField(fieldSize))
    }
}

export const setGameState = (value: boolean) => {

    return {
        payload: value,
        type: MAP.SET_GAME_STATE
    }
}