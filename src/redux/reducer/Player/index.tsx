import { PLAYER } from "../../constraint"

const initialState = {
    userScore: 0,
    aiScore : 0,
    userName: ''
}

const Player = (state = initialState, action: any) => {

    switch (action.type) {
        case PLAYER.SET_USERNAME:
            return {
                ...state,
                userName: action.payload
            }
        case PLAYER.SET_USER_SCORE:
            return {
                ...state,
                userScore : action.payload
            }
        case PLAYER.SET_AI_SCORE:
            return {
                ...state,
                aiScore: action.payload
            }
        default:
            return state
    }
}

export { Player } 