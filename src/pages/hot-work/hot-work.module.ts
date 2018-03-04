import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotWorkPage } from './hot-work';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HotWorkPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(HotWorkPage),
  ],
})
export class HotWorkPageModule {}
