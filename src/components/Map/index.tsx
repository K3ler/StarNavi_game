import React, { useEffect } from 'react'
import { IMap } from './interfaces'

import cl from './index.module.sass'

// Components
import Cells from './Cells'

// Actions
import { changeValue, setPrevCell, changeDelay } from '../../redux/actions/mapActions'
import { setUserScore, setAiScore, setWinner } from '../../redux/actions/playerActions'

// Libs
import useInterval from '@use-it/interval';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'

// Contraints
import { CELL } from '../../redux/constraint'


const Map: React.FC<IMap> = (props: IMap) => {

    // States
    const dispatch = useDispatch();
    // Get delay for Timer
    const delay = useSelector((state: RootStateOrAny) => state.map.delay)
    // Cells for Game Matrix
    const cells = useSelector((state: RootStateOrAny) => state.map.cells)
    // Get mapSize 
    const mapSize = useSelector((state: RootStateOrAny) => state.map.mapSize)
    // Get prevent cell
    const prevCell = useSelector((state: RootStateOrAny) => state.map.prevCell)

    // Others 
    const aiScore = useSelector((state: RootStateOrAny) => state.player.aiScore)
    const userScore = useSelector((state: RootStateOrAny) => state.player.userScore)
    const userName = useSelector((state: RootStateOrAny) => state.player.userName)

    // Handle click on Cell
    const handleClick = (y, x) => {

        // If Cell is Blue, then User get Score!
        if (cells[y][x] === CELL.HIGHLIGHT) {
            // Change array value
            dispatch(changeValue(y, x, CELL.USER))
            // Get Score!
            dispatch(setUserScore(userScore + 1))
        }
    }

    // Generate random coords for Matrix
    const generateRandomCoords = () => {

        let y = Math.floor(Math.random() * (mapSize - 1 - 0 + 1)) + 0;
        let x = Math.floor(Math.random() * (mapSize - 1 - 0 + 1)) + 0;

        return [y, x];
    };

    // Check if Cell on Coordneds is Usable
    const isCellUsable = (y, x, cell) => {
        if (
            cell[y][x] !== CELL.HIGHLIGHT &&
            cell[y][x] !== CELL.AI &&
            cell[y][x] !== CELL.USER
        ) {
            return true;
        } else {
            return false;
        }
    };

    // Get random coordneds and than colored them.
    const hightlightRandomCell = () => {
        let copyCells = JSON.parse(JSON.stringify(cells));
        let [y, x] = generateRandomCoords();

        while (!isCellUsable(y, x, copyCells)) {
            [y, x] = generateRandomCoords();
        }

        dispatch(changeValue(y, x, CELL.HIGHLIGHT))
        dispatch(setPrevCell(y, x))
    };

    // Check, if user fast enought
    const checkWinnerScore = () => {
        let [y, x] = prevCell

        if (cells[y][x] === CELL.HIGHLIGHT) {
            dispatch(changeValue(y, x, CELL.AI))
            dispatch(setAiScore(aiScore + 1))
        }
    };

    // Check if players get limit of (mapSize*mapSize) / 2
    useEffect(() => {

        let limit = (mapSize * mapSize) / 2;

        if (userScore >= limit ) {
            dispatch(setWinner(userName, new Date()))
            dispatch(changeDelay(null))
        } 

        if (aiScore >= limit) {
            dispatch(setWinner("Computer", new Date()))
            dispatch(changeDelay(null))
        }

    }, [aiScore, userScore, mapSize, dispatch, userName])


    // Here i stop, and start timer. 
    // Just change the delay varible
    useInterval(() => {
        checkWinnerScore()
        hightlightRandomCell()
    }, delay)

    return (
        <div className={cl.map}>
            <table className={cl.mapCells}>
                <thead />
                <tbody>
                    <Cells cells={cells} handleClick={handleClick} />
                </tbody>
            </table>
        </div>
    )
}

export { Map }