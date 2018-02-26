import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work';
import { FoodComponent } from './food/food';
import { SwiperComponent } from './swiper/swiper';
import { ShareComponent } from './share/share';
import { ClassItemComponent } from './class-item/class-item';
import { HeaderComponent } from './header/header';
import { CommentsComponent } from './comments/comments';
import { FooterComponent } from './footer/footer';
import { PhotoswipeComponent } from './photoswipe/photoswipe';
@NgModule({
	declarations: [WorkComponent,
    FoodComponent,
    SwiperComponent,
    ShareComponent,
    ClassItemComponent,
    HeaderComponent,
    CommentsComponent,
    FooterComponent,
    PhotoswipeComponent],
	imports: [],
	exports: [WorkComponent,
    FoodComponent,
    SwiperComponent,
    ShareComponent,
    ClassItemComponent,
    HeaderComponent,
    CommentsComponent,
    FooterComponent,
    PhotoswipeComponent]
})
export class ComponentsModule {}
