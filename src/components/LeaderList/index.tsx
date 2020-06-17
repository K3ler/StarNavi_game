import React from 'react'

import cl from './index.module.sass'
import { LeaderItem } from './Item'

const LeaderList: React.FC = () => {

    return (
        <div className={cl.wrapper}>
            <h1 className={cl.leaderTitle}>
                Leader Board 
            </h1>
            <ul className={cl.leaderList}>
                <LeaderItem />
            </ul>
        </div>
    )
}

export { LeaderList }