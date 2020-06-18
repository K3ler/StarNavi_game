import React from 'react'

import cl from './index.module.sass'

// Interface
import { IGameDifficult } from './interface'

// Libs
import { useSelector, RootStateOrAny } from 'react-redux'

const GameDifficult: React.FC<IGameDifficult> = (props: IGameDifficult) => {

    // Get Game Mode
    const modes = useSelector((state: RootStateOrAny) => state.map.modes)

    return (
    <div className={cl.wrapper}>
        <select className={cl.select} onChange={props.change}>
            <option value="-1">Game Difficult</option>
            {
                modes.map((mode, index) => (
                    <option key={"f"+index} value={index}>{mode.name}</option>
                ))
            }
        </select>
    </div>
    )
}

export { GameDifficult }