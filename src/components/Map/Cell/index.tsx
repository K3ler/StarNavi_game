import React from 'react'

import cl from './index.module.sass'

// Interface
import { ICell } from './interface'

// Constraints
import { CELL } from '../../../redux/constraint'

const Cell : React.FC<ICell> = (props : ICell) => {

    let clBase    = ""
    // If CELL HAS 1, colored in Blue
    const clHight   = `${props.value === CELL.HIGHLIGHT ? cl.hightlight : ''}`
    // If CELL HAS 2, colored in Green
    const clUser    = `${props.value === CELL.USER ? cl.user : ''}`
    // If CELL HAS 3, colored in Red
    const clAi      = `${props.value === CELL.AI ? cl.ai : ''}`
    
    clBase = clHight + clUser + clAi

    const handleClick = () => {
        props.click(props.y, props.x)
    }

    return (
        <td className={`${cl.cell} ${clBase}`} onClick={handleClick}></td>
    )
}

export { Cell }