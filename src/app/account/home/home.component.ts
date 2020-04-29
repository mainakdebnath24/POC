import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../../news-service.service';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { News } from './news.model';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  results: Observable<News[]>;
  isLoading$: Observable<boolean>;
  newsObservable: BehaviorSubject<News[]> = new BehaviorSubject<News[]>(null);
  edu : boolean;
  constructor(
    private newsService: NewsServiceService,
    private authService: AuthService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.authService.startLoading();
    this.stopLoader();
    /* don't call if url/ returned data is not known
    this.results = this.newsService.search(
      'some url'
    );
    this.results.subscribe((object: News[]) => {
      this.newsObservable.next(object);
      this.stopLoader();
    });*/
  }
  stopLoader() {
    this.authService.stopLoading();
  }




}
