# fblogin-ionic2-browser

## setting

### 1. git clone
 ```
 $git clone git@github.com:rdlabo/fblogin-ionic2-browser.git fblogin-ionic2-browser
 ```
 
### 2. move directory
 ```
 $cd fblogin-ionic2-browser
 ```
  
### 3. install npm file
 ```
 $npm i
 ```
   
### 4. set facebook appID
 ```
 // services/facebook.ts
FB.init(
    {
        appId: '【input your facebook appID】',
        xfbml: false,
        version: 'v2.5'
    }
);
 ```
