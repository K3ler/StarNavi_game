import React from 'react'
import { ICells } from './interface'
import cl from './index.module.sass'
import { Cell } from '../Cell'

const Cells: React.FC<ICells> = (props : ICells) => {

    const cellsArray = props.cells.map((row, i) => (
        <tr className={cl.row}>
            {
                row.map((cell, index) => (
                    <Cell />
                ))
            }
        </tr>
    ))

    return (
        <React.Fragment>
           {cellsArray}
        </React.Fragment>
    )
}




export default Cells 