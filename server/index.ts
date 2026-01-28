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

  // Detectamos si estamos en la carpeta dist (producción) o en src (desarrollo)
  // Si __dirname termina en "dist", ya estamos dentro. Si no, estamos en "server"
  const isProduction = process.env.NODE_ENV === "production";

  // Definimos la ruta de forma absoluta y simple
  // En la mayoría de los despliegues (Render/Railway), lo ideal es que 
  // los estáticos estén en una carpeta 'public' al mismo nivel que el server.
  const staticPath = path.resolve(__dirname, "public");

  console.log(`[Server] Intentando servir desde: ${staticPath}`);

  // Verificar si la carpeta existe para avisarte en los logs
  if (!fs.existsSync(staticPath)) {
    console.warn(`[Server] ADVERTENCIA: La carpeta ${staticPath} no existe.`);
  }

  app.use(express.static(staticPath));

  app.get("*", (req, res) => {
    const indexPath = path.join(staticPath, "index.html");

    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      // Este mensaje te ayudará a ver qué ruta está fallando en los logs del servidor
      res.status(404).send(`Error: No se encontró index.html en: ${indexPath}`);
    }
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

startServer().catch(console.error);
