import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { ArticleActionsByReducer } from '@app/store/actions/articleActions';
import { getGroupArticles } from '@app/store/selectors/articleSelectors';
import { AppState, DynamicObject, INotification } from '@app/store/types';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NzTabChangeEvent, NzTabComponent, NzTabsModule } from 'ng-zorro-antd/tabs';
import moment from 'moment'
import { FeedArticlesComponent } from '@app/pages/home/components/feed-articles/feed-articles.component';

@Component({
  selector: 'app-feeds',
  standalone: true,
  imports: [NzTabsModule, FeedArticlesComponent],
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.scss'
})
export class FeedsComponent {
  
  selectedIndex = 0;
  handleChangeTab = ($event: NzTabChangeEvent) => {
    console.log($event);
	}

  // const store = useStore()
	// const tabQuery = ref('global');		
	// const currentTabs = computed<IFeedTab[]>(() => (store.getters["article/getGroupArticles"] ?? []).map((groupArticle) => ({
	// 		tabName:`${groupArticle.tag.charAt(0).toUpperCase()}${groupArticle.tag.substring(1)} Feed`,
	// 		id: `${groupArticle.tag}`,
	// 		children: h(FeedArticles, {
	// 			pagination: {
	// 				totalItems: groupArticle.articles?.meta?.totalItems ?? 0,
	// 				itemsPerPage: groupArticle.articles?.meta?.itemsPerPage ?? 10,
	// 				currentPage: groupArticle.articles?.meta?.currentPage ?? 1,
	// 			},
	// 			feedArticles: (groupArticle.articles?.items ?? []).map((article, i) => ({
	// 				articleId: article?.id,
	// 				authorName: article?.user?.username,
	// 				authorId: article?.user?.id,
	// 				authorAvatar: article?.user?.avatarUrl,
	// 				createdAt: `${moment(article?.updatedAt ? Number(article?.updatedAt): Number( article?.createdAt)).format('MMMM DD YYYY')}`,
	// 				title: article?.title,
	// 				content: article?.content,
	// 				likes: article?.likes,
	// 				liked: false,
	// 			})).sort(first => first?.id === 'global' ? -1 : 1),
	// 			tag: `${groupArticle.tag}`
	// 	})
	// }))) 

	// watch(currentTabs, (tabs) => {
	// 	if(tabs.length > 0 && !tabs.some(tab => tab.id === `${tabQuery.value}`)){
	// 		tabQuery.value = tabs[tabs.length - 1].id
	// 	}
	// })

	// const handleChangeTab = (activeKey) => {
	// 	tabQuery.value = activeKey;
	// }

  constructor(private store: Store<AppState>) {
    // this.count$ = store.select(getGroupArticles);
  }

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
