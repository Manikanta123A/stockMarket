const {model} = require("mongoose")
const {WatchListSchema} = require('../Schemas/WatchlistSchema')
const watchlistmodel = new model ("watchlist",WatchListSchema)

module.exports = {watchlistmodel}