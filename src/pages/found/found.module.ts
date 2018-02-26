import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoundPage } from './found';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FoundPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FoundPage),
  ],
  exports:[
    FoundPage
  ]
})
export class FoundPageModule {}
