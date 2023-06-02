// Node module imports
import express from "express";

// Schema imports
import clubModel from "../models/club.js";

// Creating the express router
const router = express.Router();

// Get the club information associated with the given ID
router.get('/clubs/:id', (req, res) => {

});

// Create a new club with the specified information
router.post('/clubs/create', async (req, res) => {
  const club = new clubModel({
    name: req.body.name,
    profilePicture: req.body.profilePicture,
    userList: [{
      user: req.body.user,
      accessRole: "Owner",
      visibilityRoles: 0
    }],
    visibilityRoleList: [],
    location: req.body.location,
    clubState: req.body.clubState,
    events: []
  });

  try {
    const toSave = await club.save();
    res.status(200).json(toSave);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
});

// Exporting the router
export default router;