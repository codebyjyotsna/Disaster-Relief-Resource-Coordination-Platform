// Backend API for Help Requests

const express = require("express");
const router = express.Router();
const { HelpRequest } = require("../models");

// Fetch all help requests
router.get("/", async (req, res) => {
  try {
    const { category, location } = req.query;
    const query = {};
    if (category) query.category = category;
    if (location) query.location = { $near: location }; // MongoDB geospatial query
    const helpRequests = await HelpRequest.find(query);
    res.json(helpRequests);
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// Submit a new help request
router.post("/", async (req, res) => {
  try {
    const { description, location, category } = req.body;
    const newRequest = new HelpRequest({ description, location, category });
    await newRequest.save();
    res.status(201).json(newRequest);
  } catch (err) {
    res.status(500).send("Error saving request");
  }
});

module.exports = router;
