import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { InscripcionService } from './inscripcion.service';
import { Server, Socket } from 'socket.io';
import { Inscripciondto } from './dto/inscripcion.dto.';

@WebSocketGateway({ cors: true })
export class InscripcionGateway implements OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer()
  wss: Server;

  constructor(private readonly InscripcionService: InscripcionService) {}

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authentication as string;
    try {
      await this.InscripcionService.registerClient(client, token);
    } catch (error) {
      client.disconnect();
      return;
    }
    this.wss.emit('clients-updated', this.InscripcionService.getConnectedClients());
  }

  handleDisconnect(client: Socket) {
    this.InscripcionService.removeClient(client.id);
    this.wss.emit('clients-updated', this.InscripcionService.getConnectedClients());
  }

  @SubscribeMessage('message-from-client')
  async onMessageFromClient(client: Socket, payload: Inscripciondto): Promise<void> {
    const inscripcion = await this.InscripcionService.create(payload);
    this.wss.emit('message-from-server', {
      fullName: this.InscripcionService.getUserfullName(client.id),
      message: inscripcion,
    });
  }
}
