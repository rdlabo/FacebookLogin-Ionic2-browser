import {Injectable} from 'angular2/core';
import {Facebook as ngFacebook} from 'ionic-native';
import './fbsdk.ts';

declare var cordova:any;

@Injectable()
export class Facebook
{
    constructor()
    {
        // browserのみ挙動
        if (typeof cordova === "undefined") {
            window.fbAsyncInit = function () {
                FB.init(
                    {
                        appId: '794642083974313',
                        xfbml: false,
                        version: 'v2.5'
                    }
                );
            };
            (function(d, s, id){
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {return;}
                js = d.createElement(s); js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                //js.src = "//connect.facebook.net/en_US/sdk/debug.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        }
    }

    login()
    {
        return new Promise(function(resolve, reject) {
            if (typeof cordova === "undefined") {
                if( navigator.userAgent.match('CriOS') ){
                    alert("iOSのChromeでは動作しません。Safariをお使い下さい。");
                } else {
                    console.log("start login");
                    FB.login(
                        function(response) {
                            console.log("login is resolve");
                            resolve(response);
                        },
                        {scope:'public_profile,user_friends,email'});
                }
            } else {
                //スマホ用
                ngFacebook.login(['email','public_profile','user_friends']).then(
                    (response) => {
                        resolve(response);
                    },
                    (failed) => {
                        reject(failed);
                    }
                );
            }
        });
    }

}