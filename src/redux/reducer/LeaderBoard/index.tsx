import { TLeaderBoard } from "./type";
import { LEADERS } from "../../constraint";

const initialState : TLeaderBoard  = {
    leaders : [],
    bestScore: 0
}

const LeaderBoard = (state = initialState, action: any) => {

    switch (action.type) {
        case LEADERS.GET_LEADERS:
            return {
                ...state,
                leaders : action.payload
            }
        default:
            return state
    }
}

export { LeaderBoard } 

