import React from 'react'

import cl from './index.module.sass'

const GameDifficult: React.FC = () => {

    return (<div className={cl.wrapper}>
        <select className={cl.select}>
            <option>Game Difficult</option>
            <option>One</option>
            <option>Two</option>
        </select>
    </div>
    )
}

export { GameDifficult }