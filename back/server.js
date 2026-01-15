import express from "express";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";
import itemRoutes from "./routes/itemRoutes.js";
import tagRoutes from "./routes/tagRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/tags", tagRoutes);

const port = 3000;
app.listen(port, () => console.log(`Serveur lancé sur http://localhost:${port}`));
