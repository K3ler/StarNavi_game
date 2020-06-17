import { MAP } from "../enums"

export const generateMapField = (size: number) => {

    let cells = [...Array(size).fill(Array(size).fill(0))]

    return {
        payload: cells,
        type: MAP.GENERATE_MAP
    }
}