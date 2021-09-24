const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: "name is required",
      trim:true,
    },
    title: {
      type: String,
      trim:true,
      
    },
    track: {
        type: Boolean,
        default: false,
    }, 

    // createdAt: {
    //     timestamps:  { createdAt: 'created_at'}
    // },
    // updatedAt:{
    //     timestamps: { updatedAt: 'updated_at' }
    // },
    category: {
      type: String,
      trim:true,
      
    }
  },
  {
    timestamps: true,
  }

);
module.exports = mongoose.model("List", listSchema);
