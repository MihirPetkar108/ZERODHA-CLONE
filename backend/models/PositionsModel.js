const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/positionsSchema");

const PositionsModel = new model("postion", PositionsSchema);

module.exports = { PositionsModel };
