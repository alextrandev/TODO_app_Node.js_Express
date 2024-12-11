import express from "express";

const app = express();
const PORT = process.env.PORT || 5004;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});