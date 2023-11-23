import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/common/services/socket.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  public users!: Array<any>;

  public constructor(
    private socketService: SocketService
  ) {

  }
  public ngOnInit(): void {
    this.socketService.emit('conversation', 'Hello Server');
    this.socketService.listen('getUsers').subscribe({
      next: (data) => {
        this.users = data;
        console.log('getUsers: ', data);
      },
      error: (err) => {
        console.log('err: ' + err);
      }
    })
  }

}
