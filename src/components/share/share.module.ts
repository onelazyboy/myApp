import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ShareComponent } from './share';
import { HeaderComponentModule } from '../header/header.module';
import { FooterComponentModule } from '../footer/footer.module';


@NgModule({
  declarations: [
    ShareComponent,
  ],
  imports: [
    HeaderComponentModule,
    FooterComponentModule,
    IonicModule,
  ],
  exports: [
    ShareComponent
  ]
})
export class ShareComponentModule {}
