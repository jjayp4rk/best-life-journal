const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

// Create Schema
const JournalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  morning: [
    {
      graditude: {
        type: String
      }
    }
  ],
  goals: [
    {
      goal: {
        type: String
      }
    }
  ],

  targets: [
    {
      target: {
        type: String
      }
    }
  ],
  lessons: [
    {
      lesson: {
        type: String
      }
    }
  ],
  wins: [
    {
      win: {
        type: String
      }
    }
  ],
  tonights: [
    {
      tonight: {
        type: String
      }
    }
  ],
  quote: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    default: moment().format("MM/DD/YYYY")
  }
});

module.exports = Journal = mongoose.model("journal", JournalSchema);
