import React from 'react'

import cl from './index.module.sass'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { changeDelay, setGameState, resetMap } from '../../../redux/actions/mapActions'
import { toast } from 'react-toastify';
import { resetPlayers } from '../../../redux/actions/playerActions';
import { setGameSettigns } from '../../../redux/actions/indexActions';


const PlayButton: React.FC = () => {

    const isGameRunning = useSelector((state: RootStateOrAny) => state.map.isGameRunning)
    const currentDelay  = useSelector((state: RootStateOrAny) => state.map.currentDelay)
    const userName      = useSelector((state: RootStateOrAny) => state.player.userName)
    const dispatch      = useDispatch()

    const startGame = () => { 

        if (isGameRunning) {
            dispatch(resetMap())
            dispatch(resetPlayers())
            dispatch(setGameSettigns())
            return 
        }
                
        if (userName === '') {
            toast.error("Please Enter Username")
            return;
        }

        if (!currentDelay) {
            toast.error("Please select Game Difficult")
            return 
        }

        dispatch(setGameState(!isGameRunning))
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