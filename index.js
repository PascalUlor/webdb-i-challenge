const express = require("express");
const app = require("./server.js");
const accountModel = require("./data/models");

const router = express.Router();

const PORT = process.env.PORT || 4000;

router.get("/", async (req, res) => {
  try {
    const allAccount = await accountModel.getAll();
    if (allAccount) {
      return res.status(200).json({
        status: 200,
        data: allAccount
      });
    }
    return res.status(404).json({
      status: 404,
      message: "No actions available"
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      error: "This information could not be retrieved."
    });
  }
});

app.use("/api", router);

/**
 * All wrong routes
 */
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Wrong route"
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
