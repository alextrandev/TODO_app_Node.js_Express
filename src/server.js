import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 5004;

// get file path
const __filename = fileURLToPath(import.meta.url);
// get directory name from path
const __dirname = dirname(__filename);

// Middleware
app.use(express.static(path.join(__dirname, '../public')));

// Website routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});