import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work';
import { FoodComponent } from './food/food';
import { SwiperComponent } from './swiper/swiper';
import { ShareComponent } from './share/share';
import { ClassItemComponent } from './class-item/class-item';
import { CommentsComponent } from './comments/comments';
import { FooterComponent } from './footer/footer';
import { PhotoswipeComponent } from './photoswipe/photoswipe';
import { IonicModule } from 'ionic-angular';
import { ShareHeaderComponent } from './share-header/share-header';
@NgModule({
	declarations: [WorkComponent,
    FoodComponent,
    SwiperComponent,
    ShareComponent,
    ClassItemComponent,
    CommentsComponent,
    FooterComponent,
    PhotoswipeComponent,
    ShareHeaderComponent],
	imports: [IonicModule],
	exports: [WorkComponent,
    FoodComponent,
    SwiperComponent,
    ShareComponent,
    CommentsComponent,
    FooterComponent,
    PhotoswipeComponent,
    ClassItemComponent,
    ShareHeaderComponent]
})
export class ComponentsModule {}
