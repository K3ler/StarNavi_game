import React from 'react'
import cl from './index.module.sass'

import { Cell } from '../Cell'
import { ICells } from './interface'

const Cells: React.FC<ICells> = (props: ICells) => {

    // Assembly Game Matrix
    const cellsArray = props.cells.map((row, y) => (
        <tr className={cl.row} key={"a" + y}>
            {
                row.map((cell, x) => (
                    <Cell y={y} x={x}
                          value={cell} 
                          click={props.handleClick}
                          key={"a" + y + "b" + x} />
                ))
            }
        </tr>
    ))

    // Then Render
    return (
        <React.Fragment>
            {cellsArray}
        </React.Fragment>
    )
}

export default Cells 