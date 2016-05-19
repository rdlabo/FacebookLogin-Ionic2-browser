import {Page, NavController} from 'ionic-angular';
import {Facebook} from './../../services/facebook';
import {TabsPage} from './../tabs/tabs';

/*
  Generated class for the SignupPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/signup/signup.html',
  providers: [Facebook]
})
export class SignupPage
{
  fb :any;
  constructor(public nav: NavController,fb:Facebook) {
    this.fb = fb;
  }

  login(){
    this.fb.login().then((response) =>{
      console.log(response);
      if (response.status === 'connected') {
        this.nav.setRoot(<any>TabsPage);
      }else{
        alert("can't using facebook login");
      }
    });
  }
}
