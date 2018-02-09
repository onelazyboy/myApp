import { Component } from '@angular/core';

/**
 * Generated class for the SwiperComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
declare var $: any;
declare var Swiper: any;
@Component({
  selector: 'swiper',
  templateUrl: 'swiper.html'
})
export class SwiperComponent {

  //存储swiper对象
  oSwiper: any = null;

  text: string;

  constructor() {
    console.log('Hello SwiperComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit(){
    this.oSwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: 5000,
      autoplayDisableOnInteraction: false,
      // 如果需要分页器
      pagination: '.swiper-pagination',
    });
  }

}
