import { TLeaderBoard } from "./type";
import { LEADERS } from "../../constraint";

const initialState : TLeaderBoard  = {
    leaders : [],
    bestScore: 0,
    isLeadersStatus: false
}

const LeaderBoard = (state = initialState, action: any) => {

    switch (action.type) {
        case LEADERS.GET_LEADERS:
            return {
                ...state,
                leaders : action.payload
            }
        case LEADERS.ADD_WINNER:
            return {
                ...state,
                leaders: action.payload
            }
        case LEADERS.LEADERS_STATUS:
            return {
                ...state,
                isLeadersStatus: action.payload
            }
        
        default:
            return state
    }
}

export { LeaderBoard } 

 