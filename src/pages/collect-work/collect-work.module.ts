import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectWorkPage } from './collect-work';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CollectWorkPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CollectWorkPage),
  ],
})
export class CollectWorkPageModule {}
