import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlePage } from './article';
import { ArticleModule } from '../../components/article/article.module';

@NgModule({
  declarations: [
    ArticlePage,
  ],
  imports: [
    ArticleModule,
    IonicPageModule.forChild(ArticlePage),
  ],
  exports:[
    ArticlePage
  ]
})
export class ArticlePageModule {}
