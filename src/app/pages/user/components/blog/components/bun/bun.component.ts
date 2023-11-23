import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/common/services/socket.service';

@Component({
  selector: 'app-bun',
  templateUrl: './bun.component.html',
  styleUrls: ['./bun.component.scss']
})
export class BunComponent implements OnInit {

  public constructor( private socketService: SocketService) {}

  public ngOnInit(): void {
  }

}
