// Node module imports
import mongoose from "mongoose";

// Creating the club schema
const clubSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  profilePicture: {
    required: true,
    type: String
  },
  userList: [{
    user: {
      required: true,
      type: String
    },
    accessRole: {
      required: true,
      type: String,
      enum: ["Owner", "Administrator", "Member"]
    },
    visibilityRoles: {
      required: true,
      type: Number
    }
  }],
  visibilityRoleList: [{
    required: true,
    type: String
  }],
  location: {
    required: true,
    type: String
  },
  clubState: {
    required: true,
    type: String,
    enum: ["Public", "Private", "Inactive"]
  },
  events: [{
    required: true,
    type: String
  }]
});

// Creating and exporting the club model
export default mongoose.model('Club', clubSchema);