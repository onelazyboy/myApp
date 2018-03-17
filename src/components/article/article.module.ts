import { NgModule } from '@angular/core';
import { FoodComponent } from './food/food';
import { FooterComponent } from './footer/footer';
import { IonicModule } from 'ionic-angular';
import { HeaderComponent } from './header/header';
import { StepsComponent } from './steps/steps';
@NgModule({
    declarations: [
        FoodComponent,
        FooterComponent,
        HeaderComponent,
        StepsComponent],
    imports: [IonicModule],
    exports: [
        FoodComponent,
        FooterComponent,
        HeaderComponent,
        StepsComponent]
})
export class ArticleModule { }
