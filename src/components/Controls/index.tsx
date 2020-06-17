import React from 'react'

import cl from './index.module.sass'

import { GameDifficult } from './GameDifficult'
import { Username } from './Username'
import { PlayButton } from './PlayButton'

const Controls: React.FC = () => {

    return (
        <div className={cl.controls}>
            <GameDifficult />
            <Username />
            <PlayButton />
        </div>
    )
}

export { Controls }