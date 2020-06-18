export type TMap = {
    mapSize: number
    isGameRunning : boolean
    cells : Array<Array<number>>
    delay: number | null
    currentDelay: number | null
    prevCell : Array<number>
    modes: Array<Object>
}