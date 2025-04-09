import { Server as SocketIOServer } from "socket.io";

export class NotificationService {
  private static io: SocketIOServer;

  static initialize(ioInstance: SocketIOServer) {
    this.io = ioInstance;
  }

  static notifyNewQuote(quote: any) {
    if (this.io) {
      this.io.emit("new-quote", quote);
    }
  }
}
