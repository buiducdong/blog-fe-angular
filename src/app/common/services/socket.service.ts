import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public constructor(
    private socket: Socket
  ) { }

  public listen(eventName: string): Observable<any>{
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      })
    })
  }

  public emit(eventName: string, data: any): void {
    this.socket.emit(eventName, data);
  }

  public disconnect(): void {
    // this.socket.removeAllListeners();
    this.socket.disconnect();
  }

  public connect(): void {
    this.socket.connect();
  }
}
