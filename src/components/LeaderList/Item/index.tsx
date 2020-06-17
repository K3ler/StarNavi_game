import React from 'react'

import cl from './index.module.sass'

const LeaderItem: React.FC = () => {

    return (
    <li className={cl.leaderItem}>
        <span className={cl.leaderName}>Миклуш</span>
        <span className={cl.leaderDate}>12.05.2009 в 15:02</span>
    </li>)
}

export { LeaderItem }