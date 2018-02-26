import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenSharePage } from './open-share';
import { ShareComponentModule } from '../../components/share/share.module';
import { FoodComponentModule } from '../../components/food/food.module';
import { CommentsComponentModule } from '../../components/comments/comments.module';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { PhotoswipeComponentModule } from '../../components/photoswipe/photoswipe.module';

@NgModule({
  declarations: [
    OpenSharePage,
  ],
  imports: [
    ShareComponentModule,
    FoodComponentModule,
    CommentsComponentModule,
    FooterComponentModule,
    PhotoswipeComponentModule,
    IonicPageModule.forChild(OpenSharePage),
  ],
  exports:[
    OpenSharePage
  ]
})
export class OpenSharePageModule {}
