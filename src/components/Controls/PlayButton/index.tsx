import React from 'react'

import cl from './index.module.sass'

// Actions
import { resetPlayers } from '../../../redux/actions/playerActions';
import { setGameSettigns } from '../../../redux/actions/indexActions';
import { changeDelay, setGameState, resetMap } from '../../../redux/actions/mapActions'

// Libs
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { toast } from 'react-toastify';


const PlayButton: React.FC = () => {

    // GameRunning flag
    const isGameRunning = useSelector((state: RootStateOrAny) => state.map.isGameRunning)
    // Current choisen delay in dropbox
    const currentDelay  = useSelector((state: RootStateOrAny) => state.map.currentDelay)
    // Current entered Username
    const userName      = useSelector((state: RootStateOrAny) => state.player.userName)
    const dispatch      = useDispatch()

    const startGame = () => { 

        // When i click "Play again"
        if (isGameRunning) {
            // Reset Map settings
            dispatch(resetMap())
            // Reset players settings
            dispatch(resetPlayers())
            // Reset game settings
            dispatch(setGameSettigns())
            return 
        }
        // Checks for errors
        if (userName === '') {
            toast.error("Please Enter Username")
            return;
        }

        if (!currentDelay) {
            toast.error("Please select Game Difficult")
            return 
        }

        // Run game, and set delay for useInterval function.
        dispatch(setGameState(!isGameRunning))

        // Null - not working, > 1 working
        dispatch(changeDelay(currentDelay))
    }


    const clickHandler = () => {
        startGame()
    }

    return (
        <div className={cl.control}>
            <button className={cl.playButton} onClick={clickHandler}>
                {
                    !isGameRunning ? "Play" : "Play again"
                }
            </button>
        </div>
    )
}

export { PlayButton }