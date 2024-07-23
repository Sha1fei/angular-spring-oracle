import { Component, Input, OnInit } from '@angular/core';
import { ArticleActionsByReducer } from '@app/store/actions/articleActions';
import { getGroupArticles } from '@app/store/selectors/articleSelectors';
import { AppState, DynamicObject, INotification } from '@app/store/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTagsComponent } from "@app/pages/home/components/popular-tags/popular-tags.component";	
import { FeedsComponent } from "@app/pages/home/components/feeds/feeds.component";	
import { FeedArticlesComponent } from "@app/pages/home/components/feed-articles/feed-articles.component";	

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeedsComponent, FeedArticlesComponent, PopularTagsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @Input() openNotification!: (data: INotification) => void;

  // count$: Observable<DynamicObject>;
  // constructor(private store: Store<AppState>) {
  //   this.count$ = store.select(getGroupArticles);
  // }

  // ngOnInit() {
  //   this.store.dispatch(ArticleActionsByReducer.loadAllArticlesAction({payload: {page: 1, limit: 10}}) )
  //   // this.count$.subscribe((el) => {
  //   //   debugger
  //   // })
  // }
}
