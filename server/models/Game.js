const mongoose = require('mongoose')
const { uid } = require('uid')

const GAME_STATE = {
    WAITING_FOR_PLAYERS: 'waiting-for-players',
    GAME_STARTED: 'game-started'
}

const GameSchema = new mongoose.Schema({
    players: {
        type: Array,
        default: []
    },
    state: {
        type: String,
        default: GAME_STATE.WAITING_FOR_PLAYERS
    },
    gameId: {
        type: String,
        default: uid(4)
    }
})

module.exports = mongoose.model('Game', GameSchema)