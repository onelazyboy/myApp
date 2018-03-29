import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../../providers/services/services';
import { UserServiceProvider } from '../../../providers/user-service/user-service';

/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {
  isLike: boolean = false;
  text: string;
  like:any = [];
  likeId = "";
  likeDate = "";
  date = new Date();
  uuid = "";

  private error: String = '';

  @Input() data: any = {};
  constructor(public navCtrl :NavController,private appService : ServicesProvider,private userService : UserServiceProvider) {
    this.getLikeDate();
  }

  getLikeDate(){
    this.uuid = this.userService.user.userId;
    this.appService.httpGet("like","userId="+this.uuid).subscribe(
      res => {
        if(res.length >0){
          this.like = this.like.concat(res)[0];
          this.isLike = true;
          this.likeId = this.like.likeId;
        }
      }
    )
  }

  likeEvent(){
    this.likeId = Math.ceil(Math.random() * 10) + "";
    this.likeDate = this.date.getFullYear()+'-'+(this.date.getMonth()+1)+'-'+this.date.getDate();
    this.like = { id: this.likeId, uid: this.data.authorId, userId: this.uuid, uuserimg: this.data.authorImg, uname: this.data.author,createTime:this.likeDate };
    this.appService.httpPost("like",this.like).subscribe(
      res => {
        this.isLike = true;
        this.likeId = this.likeId;
      },error => this.error = error
    )
  }
  unLikeEvent(){
    this.appService.httpDelete("like/"+this.likeId,"").subscribe(
      res => {
        this.isLike = false;
      },error => this.error
    )
  }

  sendComment(id,userId){
    this.navCtrl.push("CommentListPage",{
      id:id,
      userId:userId
    })
  }

}
