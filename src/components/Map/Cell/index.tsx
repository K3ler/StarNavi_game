import React from 'react'

import cl from './index.module.sass'
import { ICell } from './interface'
import { CELL } from '../../../redux/constraint'

const Cell : React.FC<ICell> = (props : ICell) => {

    let clBase    = ""
    const clHight   = `${props.value === CELL.HIGHLIGHT ? cl.hightlight : ''}`
    const clUser    = `${props.value === CELL.USER ? cl.user : ''}`
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