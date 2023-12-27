# ReactJS Portfolio Template

This template is based on my personal portfolio found here - https://shreyasi2002.github.io

### **NOTE: Do not forget to mention my name if you are using this template. I have worked hard for this :)**

<img width="100%" alt="background" src="https://github.com/Shreyasi2002/ReactJS-Portfolio/assets/75871525/d1fffe8d-0458-4c2b-9a8e-c681dfd85878">

_**Note** : I want to acknowledge that the template I have created is not perfect and undoubtedly has areas that can be enhanced. I invite all contributors to share their insights and suggestions for improvements. Let's work collaboratively to refine this template :)_

## Steps to Follow
### Clone the repository and move to the correct folder
```bash
git clone https://github.com/Shreyasi2002/ReactJS-Portfolio.git 
cd ReactJS-Portfolio
```
### Install the dependencies and packages
```bash
npm install
```
Running this command will install all the dependencies mentioned in `package.json`
<br/>
You may notice a message like this - 
```bash
9 vulnerabilities (1 low, 2 moderate, 6 high)

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```
This is not a problem :)

### Get the Service ID, Template ID and Public Key from EmailJS
I have used EmailJS (https://www.emailjs.com) to build the contact form in the template. You can get the service id from `Email Services` section, template id from `Email Template` section and the public key from `Account` section.

Modify the following part in the `src/components/Contact.js` file -
```js
const SERVICE_ID = "";
const TEMPLATE_ID = "";
const PUBLIC_KEY = "";
```

### Starting the website on localhost server
```bash
npm start
```
This will start your app on the server. If you see a message like this, it means your application is successfully running on http://localhost:3000
```bash
Compiled successfully!

You can now view portfolio in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.1.6:3000

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```
### Deploying the website to Github Pages
To deploy your application to GitHub Pages, push your code to GitHub, and run the following command - 
``` bash
npm run deploy
```
Next, you have to -
1. Navigate to Settings > Pages
2. Make sure you have chosen `gh-pages` as tha branch to build your website
   <img width="785" alt="build" src="https://github.com/Shreyasi2002/ReactJS-Portfolio/assets/75871525/afe05b7a-f52b-4300-8fee-2eef627ee07c">


Viola!! Now you have your portfolio up and running 🥳

If you like this template, support me by buying me a coffee :)

<a href="https://www.buymeacoffee.com/shreyasimandal" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" height="55px"></a>



