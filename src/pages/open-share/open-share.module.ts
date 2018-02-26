import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenSharePage } from './open-share';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    OpenSharePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(OpenSharePage),
  ],
  exports:[
    OpenSharePage
  ]
})
export class OpenSharePageModule {}
