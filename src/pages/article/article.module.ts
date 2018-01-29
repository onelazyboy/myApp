import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlePage } from './article';
import { FoodComponentModule } from '../../components/food/food.module'

@NgModule({
  declarations: [
    ArticlePage,
  ],
  imports: [
    FoodComponentModule,
    IonicPageModule.forChild(ArticlePage),
  ],
  exports:[
    ArticlePage
  ]
})
export class ArticlePageModule {}
