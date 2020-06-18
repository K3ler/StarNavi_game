import { PLAYER } from "../constraint"

export const setUsername = (name : string) => {

    return {
        payload: name,
        type: PLAYER.SET_USERNAME
    }
}

export const setUserScore = (score : number ) => {
    
    return {
        payload: score,
        type: PLAYER.SET_USER_SCORE
    }
} 

export const setAiScore = (score : number ) => {

    return {
        payload: score,
        type: PLAYER.SET_AI_SCORE
    }
} 