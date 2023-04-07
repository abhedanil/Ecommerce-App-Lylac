# Ecommerce App

This is a simple web application for buying commodities.




## Contents

 - Installation
 - Usage
 - Api reference
 - Contribution



## Installation

 To run the application locally, follow these 
 steps: 1.Clone the repository: 
 ```bash
 git clone  https://github.com/your-username/URL_shortner-nodejs.git
 ```

2.go to file:
 ```bash
 cd backend
  ```
  
3.install Dependencies:
  ```bash
  npm install
  ```
4.Start the application

 ```bash
  npm start
  ```
## Usage
To use the URL shortener, go to the home page by using address
 ```bash
 http://localhost:5000 
  ```
   and enter a long URL that you want to shorten. Click the "Shorten" button, and the application will generate a short link for you. You can click on the short link provided on the home page to navigate to the original address or You can copy the short link and share it with others.




1.Fork the repository. 

2.Create a new branch: 

```bash
git checkout -b my-feature-branch 
```

3.Make your changes and commit them: 
```bash
git commit -m "Add new feature" 
```
4.Push your changes to the branch: 
```bash
git push origin my-feature-branch 
```
Submit a pull request. Please ensure that your code follows the project's coding style and passes all tests before submitting a pull request.

## API Reference

postman collection link: https://api.postman.com/collections/22326604-84dfabbb-9a44-46ac-936a-786a94b0fff3?access_key=PMAT-01GXD2E851RV9VWQNW5B342TTH


Please use this postman collection to add products to database ( That's how the app is configured)
#### Add product

```http
  POST /api/product/addProduct
```
View Cart

```http
  GET /api/user/usersCart
```
Delete product from Cart

```http
  GET /api/user/deleteproCart
```
Login

```http
  GET /api/user/login
```
Signup
```http
  GET /api/user/register
```
