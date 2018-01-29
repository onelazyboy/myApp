import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work';
import { FoodComponent } from './food/food';
@NgModule({
	declarations: [WorkComponent,
    FoodComponent,
    FoodComponent],
	imports: [],
	exports: [WorkComponent,
    FoodComponent,
    FoodComponent]
})
export class ComponentsModule {}
