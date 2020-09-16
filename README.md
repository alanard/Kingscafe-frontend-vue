# King's Cafe Website
<p align="center">
<img align="center" src="readme_image/kingscafe_logos.PNG" width="400" height="250"> <img align="center" src="readme_image/vuejs-300x300.png" width="230" height="180">
</p>

## Table of Contents
- Introduction
- Features
- Requirements
- Usage
- Create Environment Variable
- Screenshots
- Related Project

### Introduction
<b>King's Cafe</b> Website is a simple online commerce website that can be engaged in the food sector where the target is buyers who want to see what products or foods are available and what we sell. You can also order food online

### Features
- Users/Customers who are not logged in can only view landing page
- Users/Customers must sign up and sign in to make a transaction and see their profiles
- Users/Customers can add the products to their wishlist and their cart for later transaction
- And others

### Requirements
- [npm](https://www.npmjs.com/package/module)
- [vue.js](https://www.vuejs.org)
- [vue.js-cli](https://cli.vuejs.org)
- [backend-kingsCafe](https://github.com/alanard/Kingscafe-backend-express/)

### Usage for development
Open your terminal or command prompt
Type git clone https://github.com/alanard/Kingscafe-frontend-vue
Open the folder and type npm install for install dependencies
Create Environment Variable here
Before run this, you must run backend first
Type npm run serve if you use npm, or yarn serve if you use yarn, for run this app. Make sure your device is connected with debugging mode.

### Create Environment Variable
`
$ cp .env.example .env
`
`
$ nano .env
`
### Set API KEY
`
VUE_APP_BASE_URL=YOUR_HOST_URL
`
## Screenshots
### Landing Page
<img src="readme_image/landingpage_navbar.PNG" width="420" height="180"> <img src="readme_image/landingpage_about_us.PNG" width="420" height="180">
<img src="readme_image/Landingpage_map_location.PNG" width="420" height="180"> <img src="readme_image/landingpage_ekstra_ordinary_menus.PNG" width="420" height="180">
<img src="readme_image/landingpage_most_popular.PNG" width="420" height="180"> <img src="readme_image/landingpage_cafe_location.PNG" width="420" height="180">
<img align="center" src="readme_image/landingpage_music.PNG" width="420" height="180">

### Home
<img src="readme_image/home/Register.PNG" width="420" height="180"> <img src="readme_image/home/login.PNG" width="420" height="180">
<img src="readme_image/home/home.PNG" width="420" height="180"> <img src="readme_image/home/home-add-cart.PNG" width="420" height="180">
<img src="readme_image/home/Products.PNG" width="420" height="180"> <img src="readme_image/home/products-add.PNG" width="420" height="180">
<img align="center" src="readme_image/home/products-update.PNG" width="420" height="180">


### Related Project (Backend)

[backend-kingsCafe](https://github.com/alanard/Kingscafe-backend-express/)
