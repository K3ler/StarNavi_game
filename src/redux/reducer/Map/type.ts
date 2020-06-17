export type TMap = {
    name : string
    mapSize: number
    isGameRunning : boolean
    cells : Array<Array<number>>
    delay: number | null
    prevCell : Array<number>
    clickedCell : Array<number>
    currentCell : Array<number>
}