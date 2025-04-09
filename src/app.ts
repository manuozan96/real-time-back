import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { productRouter } from "./interfaces/controllers/routes/product.routes";
import { quoteRouter } from "./interfaces/controllers/routes/quote.routes";
import { userRouter } from "./interfaces/controllers/routes/user.routes";
import { Database } from "./infrastructure/database/mongoose";
import { configureSocket } from "./infrastructure/websocket/socketServer";
import { NotificationService } from "./infrastructure/websocket/NotificationService";
dotenv.config();

const app = express();
const httpServer = createServer(app);

const io = new SocketIOServer(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/quotes", quoteRouter);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "";

if (!MONGO_URI) {
  console.error(" MONGO_URI not found. Check environment variables.");
  process.exit(1);
}

console.log("🔎 MONGO_URI:", `"${MONGO_URI}"`);

async function startServer() {
  await Database.connect(MONGO_URI);

  configureSocket(io);
  NotificationService.initialize(io);

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
}

startServer();
