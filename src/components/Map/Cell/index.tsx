import React from 'react'

import cl from './index.module.sass'

const Cell : React.FC = () => {

    return (
        <td className={cl.cell}></td>
    )
}

export { Cell }