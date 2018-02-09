import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work';
import { FoodComponent } from './food/food';
import { SwiperComponent } from './swiper/swiper';
import { ShareComponent } from './share/share';
import { ClassItemComponent } from './class-item/class-item';
import { HeaderComponent } from './header/header';
@NgModule({
	declarations: [WorkComponent,
    FoodComponent,
    SwiperComponent,
    ShareComponent,
    ClassItemComponent,
    HeaderComponent],
	imports: [],
	exports: [WorkComponent,
    FoodComponent,
    SwiperComponent,
    ShareComponent,
    ClassItemComponent,
    HeaderComponent]
})
export class ComponentsModule {}
