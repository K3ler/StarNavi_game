import React from 'react'

import cl from './index.module.sass'

// Components
import { LeaderItem } from './Item'

const LeaderList: React.FC = () => {

    return (
        <div className={cl.wrapper}>
            <div className={cl.content}>
                <h1 className={cl.leaderTitle}>
                    Leader Board 
                </h1>
                <ul className={cl.leaderList}>
                    <LeaderItem />
                </ul>
            </div>
        </div>
    )
}

export { LeaderList }