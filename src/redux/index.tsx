import { combineReducers } from 'redux'
import { Map } from './reducer/Map/'
import {Player} from './reducer/Player/'
import {LeaderBoard} from './reducer/LeaderBoard/'


export default combineReducers({
    map: Map,
    player: Player,
    leaderBoard: LeaderBoard
})