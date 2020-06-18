import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://starnavi-frontend-test-task.herokuapp.com',
    timeout: 1000
});


export const getGameSettings = (cb) => {

    instance.get('/game-settings').then((res) => {
        cb(res)
    })
}