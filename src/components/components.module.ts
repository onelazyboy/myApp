import { NgModule } from '@angular/core';
import { WorkComponent } from './work/work';
import { SwiperComponent } from './swiper/swiper';
import { ShareComponent } from './share/share';
import { ClassItemComponent } from './class-item/class-item';
import { CommentsComponent } from './comments/comments';
import { FooterComponent } from './footer/footer';
import { PhotoswipeComponent } from './photoswipe/photoswipe';
import { IonicModule } from 'ionic-angular';
import { ShareHeaderComponent } from './share-header/share-header';
import { QuestionComponent } from './question/question';
import { QuestionHeaderComponent } from './question-header/question-header';
import { QuestionFooterComponent } from './question-footer/question-footer';
@NgModule({
    declarations: [WorkComponent,
        SwiperComponent,
        ShareComponent,
        ClassItemComponent,
        CommentsComponent,
        FooterComponent,
        PhotoswipeComponent,
        ShareHeaderComponent,
        QuestionComponent,
        QuestionHeaderComponent,
        QuestionFooterComponent],
    imports: [IonicModule],
    exports: [WorkComponent,
        SwiperComponent,
        ShareComponent,
        CommentsComponent,
        FooterComponent,
        PhotoswipeComponent,
        ClassItemComponent,
        ShareHeaderComponent,
        QuestionComponent,
        QuestionHeaderComponent,
        QuestionFooterComponent]
})
export class ComponentsModule { }
