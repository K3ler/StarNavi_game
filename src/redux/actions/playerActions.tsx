import { PLAYER, LEADERS } from "../constraint"

export const setUsername = (name: string) => {

    return {
        payload: name,
        type: PLAYER.SET_USERNAME
    }
}

export const setUserScore = (score: number) => {

    return {
        payload: score,
        type: PLAYER.SET_USER_SCORE
    }
}

export const setAiScore = (score: number) => {

    return {
        payload: score,
        type: PLAYER.SET_AI_SCORE
    }
}

export const setWinner = (winner: string, date: Date) => {
    return (dispatch, getState) => {

        let leaders = JSON.parse(JSON.stringify(getState().leaderBoard.leaders))

        leaders.push({
            winner
        })

        dispatch({
            payload: leaders,
            type: LEADERS.ADD_WINNER
        })

        dispatch({
            payload: {
                winner,
                date
            },
            type: PLAYER.SET_WINNER
        })
    }
}

export const resetPlayers = () => {
    return {
        type: PLAYER.RESET_PLAYERS
    }
}