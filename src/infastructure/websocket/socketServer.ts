import { Server as SocketIOServer, Socket } from "socket.io";

export function configureSocket(io: SocketIOServer) {
  io.on("connection", (socket: Socket) => {
    console.log(`🟢 New client connected: ${socket.id}`);

    socket.on("message", (data) => {
      console.log("📩 Message received:", data);
      io.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log(`🔴 Client disconnected: ${socket.id}`);
    });
  });
}
