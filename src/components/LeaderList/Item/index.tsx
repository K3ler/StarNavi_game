import React from 'react'

import cl from './index.module.sass'

// Libs 
import { useSelector, RootStateOrAny } from 'react-redux'

const LeaderItem: React.FC = () => {

    let leadersList = useSelector((state : RootStateOrAny) => state.leaderBoard.leaders)

    // Get all winners
    const leaders = leadersList.map((leader, index) => {
        return (
            <li className={cl.leaderItem} key={"ld"+index}>
                <span className={cl.leaderName}>{leader.winner}</span>
                <span className={cl.leaderDate}>{leader.date}</span>
            </li>
        )
    })
    
    // Render them
    return (
        <React.Fragment>
            {leaders}
        </React.Fragment>
        )
}

export { LeaderItem }