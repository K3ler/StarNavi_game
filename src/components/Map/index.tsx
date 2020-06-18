import React, { useEffect } from 'react'
import { IMap } from './interfaces'

import cl from './index.module.sass'
import Cells from './Cells'

import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { changeValue, setPrevCell, changeDelay } from '../../redux/actions/mapActions'
import { CELL } from '../../redux/constraint'

import useInterval from '@use-it/interval';
import { setUserScore, setAiScore, setWinner } from '../../redux/actions/playerActions'

const Map: React.FC<IMap> = (props: IMap) => {

    // States
    const dispatch = useDispatch();
    const delay = useSelector((state: RootStateOrAny) => state.map.delay)
    const cells = useSelector((state: RootStateOrAny) => state.map.cells)
    const mapSize = useSelector((state: RootStateOrAny) => state.map.mapSize)
    const prevCell = useSelector((state: RootStateOrAny) => state.map.prevCell)

    const aiScore = useSelector((state: RootStateOrAny) => state.player.aiScore)
    const userScore = useSelector((state: RootStateOrAny) => state.player.userScore)
    const userName = useSelector((state: RootStateOrAny) => state.player.userName)

    const handleClick = (y, x) => {

        if (cells[y][x] === CELL.HIGHLIGHT) {
            dispatch(changeValue(y, x, CELL.USER))
            dispatch(setUserScore(userScore + 1))
        }
    }

    const generateRandomCoords = () => {

        let y = Math.floor(Math.random() * (mapSize - 1 - 0 + 1)) + 0;
        let x = Math.floor(Math.random() * (mapSize - 1 - 0 + 1)) + 0;

        return [y, x];
    };

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

    const hightlightRandomCell = () => {
        let copyCells = JSON.parse(JSON.stringify(cells));
        let [y, x] = generateRandomCoords();

        while (!isCellUsable(y, x, copyCells)) {
            [y, x] = generateRandomCoords();
        }

        dispatch(changeValue(y, x, CELL.HIGHLIGHT))
        dispatch(setPrevCell(y, x))
    };

    const checkWinnerScore = () => {

        let [y, x] = prevCell

        if (cells[y][x] === CELL.HIGHLIGHT) {
            dispatch(changeValue(y, x, CELL.AI))
            dispatch(setAiScore(aiScore + 1))
        }
    };

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