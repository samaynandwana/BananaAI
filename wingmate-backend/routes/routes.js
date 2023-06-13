// Node module imports
import express from "express";
import { CognitoJwtVerifier } from "aws-jwt-verify";
import dotenv from "dotenv";

// Load the .env file with secrets
dotenv.config();

// Schema imports
import clubModel from "../models/club.js";

// Creating the express router
const router = express.Router();

// Implement authentication for all API routes
const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.AWS_USER_POOL_ID,
  tokenUse: "access",
  clientId: process.env.AWS_CLIENT_ID
});

router.use(async (req, res, next) => {
  try {
    const payload = await verifier.verify(
      req.headers.authorization
    );
    next();
    console.log("Token is valid. Payload:", payload);
  } catch {
    console.log("Token not valid!");
    return res.status(403).json({
      message: 'Not authorized'
    });
  }
});

// Get the club information associated with the given ID
router.get('/clubs/:id', (req, res) => {
  console.log("successfully called this route");
  res.send("got to /clubs/:id");
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