import { TLeaderBoard } from "./type";

const initialState : TLeaderBoard  = {
    leaders : [],
    bestScore: 0
}

const LeaderBoard = (state = initialState, action: any) => {

    switch (action.type) {
        default:
            return state
    }
}

export { LeaderBoard } 

