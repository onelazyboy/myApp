import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenSharePage } from './open-share';
import { ShareComponentModule } from '../../components/share/share.module';

@NgModule({
  declarations: [
    OpenSharePage,
  ],
  imports: [
    ShareComponentModule,
    IonicPageModule.forChild(OpenSharePage),
  ],
  exports:[
    OpenSharePage
  ]
})
export class OpenSharePageModule {}
