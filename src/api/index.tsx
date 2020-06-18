import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://starnavi-frontend-test-task.herokuapp.com',
    timeout: 1000
});

export const getGameSettings = (cb) => {
    instance.get('/game-settings').then(cb)
}

export const getLeaders = (cb) => {
    instance.get('/winners').then(cb)
}

export const sendWinners = (cb) => {
    instance.post('/winners')
}