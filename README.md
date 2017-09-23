# OpenServices
NOTICE: This is **UNFINISHED** so please **DO NOT COMPLAIN** if it breaks on you.

# How to Setup
Requirements:
<br>
Node.js
<br>
Fiddler4
<br>
Luma3DS Game Patching
<br>
Knowledge
<br>
-------------------------
<br>
Alright so lets jump right in!
<br>
Make sure you unlink your NNID before doing any of this.
<br>
Open up Fiddler4 and then go to Tools->Options->Connections then select "Allow Remote Computers" and restart Fiddler4.
<br>
Go to Tools->Options->Connections in Fiddler4 and select "Capture HTTPS CONNECTs" if its not already selected then select "Decrypt HTTPS traffic" DO NOT INSTALL ANY CERTIFICATES IT SAYS TO INSTALL JUST HIT NO I REPEAT **DO NOT INSTALL ANY CERTIFICATES IT SAYS TO INSTALL**.
<br>
Open Command Prompt and type ipconfig and find your local IP, you'll need this for later.
<br>
Go to 3DS Settings and go to Internet settings and select your WiFi that is going to be used for this and hit change settings then go to proxy settings and turn it on and then hit detailed setup and then enter your local IP from the last step into proxy server and port 8888 into port and let it do a connection test and hopefully it connected successfully.
<br>
Download this repository from here https://github.com/xKyup/OpenServices/archive/master.zip and download this https://file.io/hUc2rE and extract it somewhere.
<br>
Then move ClientCertificate.cer to Documents->Fiddler2 or Documents->Fiddler4 depending on what version and sometimes Fiddler4 uses the Fiddler2 folder.
<br>
Then move the titles folder to your luma folder on your SD card, make sure you have game patching enabled.
<br>
Then extract the OpenServices repository ZIP file somewhere and open command prompt and CD to it.
<br>
Do "npm install https express" in the root of the repository files and then cd to NNIDServices and run this "npm install fs path"
<br>
Then run "node NNIDService" and hopefully it should run just make sure you have no applications using port 80/443 and **its normal if you get nothing in command prompt**.
<br>
Go to Tools->HOSTS and enable it and type "(your local IP from command prompt) account.nintendo.net" and hit save.
<br>
Then finally restart Fiddler4 and turn on your 3DS and go to settings and register for a NNID and hopefully it should register just fine.
<br>
And to unregister simply turn off the proxy on your 3ds and login using a random password and hope that it will allow you to create a new account.