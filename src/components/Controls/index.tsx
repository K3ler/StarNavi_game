import React from 'react'

import cl from './index.module.sass'

// Components
import { GameDifficult } from './GameDifficult'
import { Username } from './Username'
import { PlayButton } from './PlayButton'

// Actions
import { setGameMode } from '../../redux/actions/mapActions'

// Libs
import { useDispatch } from 'react-redux'

const Controls: React.FC = () => {

    let dispatch = useDispatch()

    // Change Game Mode - easy, normal, hard
    const changeGameModeHangler = (e: any) => {
        let modelIndex = parseInt(e.target.value)
        dispatch(setGameMode(modelIndex))
    }

    return (
        <div className={cl.controls}>
            <GameDifficult change={changeGameModeHangler} />
            <Username />
            <PlayButton />
        </div>
    )
}

export { Controls }