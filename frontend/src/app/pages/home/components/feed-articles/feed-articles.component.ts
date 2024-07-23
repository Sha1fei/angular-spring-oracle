import { Component, Input, OnInit } from '@angular/core';
import { ArticleActionsByReducer } from '@app/store/actions/articleActions';
import { getGroupArticles } from '@app/store/selectors/articleSelectors';
import { AppState, DynamicObject, INotification } from '@app/store/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feed-articles',
  standalone: true,
  imports: [],
  templateUrl: './feed-articles.component.html',
  styleUrl: './feed-articles.component.scss'
})
export class FeedArticlesComponent {
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
