import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/common/services/socket.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})
export class AwsComponent implements OnInit {

  public constructor( private socketService: SocketService) {}

  public ngOnInit(): void {
    1+1;
  }

}
