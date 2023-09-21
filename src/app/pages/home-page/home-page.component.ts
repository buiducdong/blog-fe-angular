/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { HomepageService } from './service/home-page.service';
import { HttpClientResponse } from 'src/app/core/models';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public users: any;

  public constructor(
    private homepageService: HomepageService
  ) { }

  public ngOnInit(): void {
    this.getAllUser();
  }

  public getAllUser(): void {
    this.homepageService.getUsers().subscribe({
        next: (res: HttpClientResponse) => {
            this.users = res.data;
        },
        error: (err: HttpErrorResponse) => {
          // eslint-disable-next-line no-console
          console.log(err);
        }
    });
}

}
