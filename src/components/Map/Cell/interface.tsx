export interface ICell {
    x: number,
    y: number,
    value: number,
    click(y, x) : any
}