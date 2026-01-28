import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath = path.resolve(__dirname, "public");
  const fallbackPath = path.resolve(__dirname, "..", "dist", "public");
  const finalPath = fs.existsSync(staticPath) ? staticPath : fallbackPath;

  console.log(`[Server] Static files path: ${finalPath}`);

  if (!fs.existsSync(finalPath)) {
    console.error(`[Server] Critical Error: Static directory not found at ${finalPath}`);
  }

  app.use(express.static(finalPath));

  app.get("*", (req, res) => {
    const indexPath = path.join(finalPath, "index.html");
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send("Frontend build not found.");
    }
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
