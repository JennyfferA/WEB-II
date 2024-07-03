import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Socket } from 'socket.io';
import { Repository } from 'typeorm';
import { Inscripciondto } from './dto/inscripcion.dto.';
import { InscripcionEntiti } from './entiti/entiti.inscripcion';

interface User {
    id: string;
    name: string;
    isActive: boolean    
}

interface ConnectedClients {
    [id: string]: {
        socket: Socket;
        user: User;
    }
}

const users: User[] = [
    {id: '5', name: 'Carolina', isActive: true},
    {id: '3', name: 'Ayala', isActive: true},
    {id: '1', name: 'Jenniffer', isActive: true}
]

@Injectable()
export class InscripcionService {
  constructor(
    @InjectRepository(InscripcionEntiti)
    private readonly inscripcionEvaluacionRepository: Repository<InscripcionEntiti>
  ) {}

  private connectedClients: ConnectedClients = {};

  async create(data: Inscripciondto): Promise<InscripcionEntiti> {
    const newInscripcion = this.inscripcionEvaluacionRepository.create(data);
    return this.inscripcionEvaluacionRepository.save(newInscripcion);
  }

  registerClient(socket: Socket, userId: string) {
    const user = users.find(user => user.id === userId);
    if (!user) {
      throw new Error('User not found');
    }
    if (!user.isActive) {
      throw new Error('User is not active');
    }

    this.checkUserConnection(user);

    this.connectedClients[socket.id] = {
      socket: socket,
      user: user
    }
  }

  removeClient(clientId: string) {
    delete this.connectedClients[clientId];
  }

  getConnectedClients(): string[] {
    return Object.keys(this.connectedClients);
  }

  getUserfullName(socketId: string): string {
    return this.connectedClients[socketId].user.name;
  }

  updateUserStatus(user: User) {
    const client = this.connectedClients[user.id];
    if (client) {
      client.user = user;
    }
  }

  checkUserConnection(user: User) {
    let connectionCount = 0;

    for (const clientId of Object.keys(this.connectedClients)) {
      const connectedClient = this.connectedClients[clientId];
      if (connectedClient.user.id === user.id) {
        connectionCount++;
        if (connectionCount >= 3) {
          throw new Error('User has reached the maximum number of connections (3)');
        }
      }
    }
  }
}
