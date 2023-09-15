const { Mongoose, default: mongoose } = require("mongoose");

const PersonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "must provide name"],
      trim: true,
      maxlength: [20, "name can not be more than 20 characters"],
    },
  },
  { timestamps: true }
);

const Person =
  mongoose.models?.Person || mongoose.model("Person", PersonSchema);

module.exports = Person;
