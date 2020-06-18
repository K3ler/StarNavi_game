import React from 'react'

import cl from './index.module.sass'
import { useSelector, RootStateOrAny } from 'react-redux'

const LeaderItem: React.FC = () => {

    let leadersList = useSelector((state : RootStateOrAny) => state.leaderBoard.leaders)

    const leaders = leadersList.map((leader, index) => {

        return (<li className={cl.leaderItem}>
            <span className={cl.leaderName}>{leader.winner}</span>
            <span className={cl.leaderDate}>{leader.date}</span>
        </li>)
    })

    return (
        <React.Fragment>
            {leaders}
        </React.Fragment>
        )
}

export { LeaderItem }