import React from 'react'

import cl from './index.module.sass'

// Libs 
import { useSelector, RootStateOrAny } from 'react-redux'
import { ILeaderItem } from './interface'

const LeaderItem: React.FC<ILeaderItem> = (props) => {

    return (
        <li className={cl.leaderItem}>
            <span className={cl.leaderName}>{props.winner}</span>
            <span className={cl.leaderDate}>{props.date}</span>
        </li>
    )
}

export { LeaderItem }