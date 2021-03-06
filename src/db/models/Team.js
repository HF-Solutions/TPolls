const timestamps = require('mongoose-timestamp')
const mongoose = require('mongoose')

const TeamSchema = mongoose.Schema({
  _id: String,
  clientId: String, // The id of the client who created the team.
  displayName: { // The name of the team to use for display purposes.
    type: String,
    required: false,
    trim: true
  },
  members: [{ // An array of member objects for each member of the team.
    _id: String,
    displayName: { // The members username/nickname.
      type: String,
      required: false,
      trim: true
    },
    voteCount: {
      type: Number,
      required: false,
      default: 0
    } // The amount of times the member has cast a vote.
  }]
})

TeamSchema.plugin(timestamps)

module.exports = () => mongoose.connection.useDb('tpConfig').model('Team', TeamSchema, 'Teams')
