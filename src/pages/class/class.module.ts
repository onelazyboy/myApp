import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassPage } from './class';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ClassPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ClassPage),
  ],
  exports:[
    ClassPage
  ]
})
export class ClassPageModule {}
