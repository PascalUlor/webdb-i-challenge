const app = require("./server.js");
const router = require("./routes");

const PORT = process.env.PORT || 4000;

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
