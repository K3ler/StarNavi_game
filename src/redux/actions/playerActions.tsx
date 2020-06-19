import { PLAYER, LEADERS } from "../constraint"
import * as api from '../../api'
import { setLeaders } from "./leaderActions"

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

        var months = ["January", "February", "March",
            "April", "May", "June", "July", "August",
            "September", "October", "November", "December"
        ];

        let nowDate = new Date();
        let global = nowDate.getDate() + " " + months[nowDate.getMonth()] + " " + nowDate.getFullYear();

        let hours = ("0" + nowDate.getHours()).slice(-2);
        let minutes = ("0" + nowDate.getMinutes()).slice(-2);
        let dateString = `${hours}:${minutes}; ` + global


        leaders.reverse()
        leaders.push({
            winner,
            date: dateString
        })
        leaders.reverse()

        api.sendWinner({
            "winner": winner,
            date: dateString
        }, (resp) => dispatch(setLeaders(resp.data.reverse())))

        dispatch({
            payload: leaders,
            type: LEADERS.ADD_WINNER
        })

        dispatch({
            payload: {
                winner,
                date: dateString
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