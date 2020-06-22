import React from 'react'

import cl from './index.module.sass'

// Components
import { LeaderItem } from './Item'
import { UIBlock } from '../UIBlock'
import { useSelector, RootStateOrAny } from 'react-redux'

const LeaderList: React.FC = () => {

    let isLeadersStatus = useSelector((state: RootStateOrAny) => state.leaderBoard.isLeadersStatus)

    let leadersList = useSelector((state : RootStateOrAny) => state.leaderBoard.leaders)



    // Get all winners
    const leaders = leadersList.map((leader, index) => {

        return <LeaderItem winner={leader.winner}
                           date={leader.date} />
    })

    return (
        <div className={cl.wrapper}>
            <UIBlock status={isLeadersStatus} />
            <div className={cl.content}>
                <h1 className={cl.leaderTitle}>
                    Leader Board
                    </h1>
                <ul className={cl.leaderList}>
                    {leaders}
                </ul>
            </div>
        </div>
    )
}

export { LeaderList }