import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalHomePage } from './personal-home';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PersonalHomePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PersonalHomePage),
  ],
  exports:[
    PersonalHomePage
  ]
})
export class PersonalHomePageModule {}
