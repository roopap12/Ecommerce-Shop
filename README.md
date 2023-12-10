<!-- # Ecommerce-Shop
*
### MVP (Version 1) Breakdown for a two Developers:*

## 1. Setup & Initial Installations:*
   
*  Version Control with Git:*
*  Install Git.*
*  Create a new repository on GitHub.*
*  Clone the repository to your local machine.*
*  Node.js & Package Manager:*
*  Install Node.js. This also installs npm.*
*  Initialize a new Node.js project: npm init -y*

## 2. Backend Development:*
   *.  Setup Basic Server:*
*  Install Express.js: npm install express*
*  Initiate a basic server using Express.js in a file, e.g., server.js.*
*  Database Connection:*
*  Install MongoDB driver: npm install mongoose*
*  Set up MongoDB connection in a file, e.g., database.js.*
*  UserAuthenticationAPI:*
*  Install required packages: npm install jsonwebtoken bcryptjs*
*  Create endpoints for registration and login.*
*  Implement JWT for token creation and validation.*
*  UserProfileAPI:*
*  Design endpoints to fetch and update user profile details (userProfileRouter.js).*
*  Develop endpoints to fetch user order history (orderHistoryRouter.js).*
*  ProductManagementAPI:*
*  Create endpoints to add, edit, delete, and fetch products (productRouter.js).*

## 3. Frontend/UI Development:*
   
*  React Setup:*
*  Use create-react-app: npx create-react-app your-app-name*
*  Shared UI Components:*
*  UserAuthenticationComponent:*
*  Design RegistrationForm, LoginForm components.*
*  Add links/CTAs for actions like "Forgot Password".*
*  UserDashboardComponent:
*  Create UserProfileDisplay, OrderHistoryList, and UserProductsList components.
*  NavbarComponent:
*  Create a Navbar with dynamic links and a CartIcon.
*  B2B UI Components:
*  ProductListingComponent:
*  Create a ProductForm and a ProductList component with edit/delete options.
*  B2BDistributorDashboardComponent:
*  Create components to view products available for bulk purchase (B2BProductList) and add to cart (AddToCartButton).
*  B2C UI Components:
*  ConsumerProductDisplayComponent:
*  Design ProductGrid and ProductDetail components.
*  ShoppingCartComponent:
*  Build the CartList component with options for quantity and checkout.

## 4. Integration and State Management:
   
*  API Integration:
*  Install Axios: npm install axios
*  Use Axios in components to fetch/post data.
*  Route Management:
*  Install React Router: npm install react-router-dom
*  Set up AppRouter component to manage routes.
*  State Management:
*  Choose between Redux or React Context API.
*  If using Redux: npm install redux react-redux
*  Set up global state, actions, and reducers.

## 5. AI Integration for MVP:

*  Product Recommendations:
*  Use TensorFlow.js: npm install @tensorflow/tfjs
*  Implement a basic recommendation engine component:   Product Recommendation.
*  Chatbot for Customer Support:
*  Use platforms like Dialogflow.
*  Create a ChatbotComponent for user interaction.

## 6. Finalize & Deploy:
    
*  Testing & Debugging:
*  Install postman for backend API testing.
*  Test components and their interactions.
*  Deployment:
*  Choose a deployment platform (e.g., Heroku, AWS, Vercel).
*  Prepare for deployment (environment variables, build process).
*  Throughout the process, as you create and modify components, keep track of your changes with Git:
*  git add . to stage changes

### git commit -m "Description of changes" to commit changes
### git push to upload changes to GitHub

### This gives a structured sequence for development   while ensuring you cover all components and functionalities planned for your MVP. 
### Remember to test individual components as you create them to minimize bugs in the final integration. -->

# Ecommerce Shop - KiwiMall

Discover and shop top-quality fashion, tech, and culinary essentials easily at competitive prices.

<p align="center">  
    <img alt="Screenshot" src=".\frontend\public\Screenshot 2023-12-05 1.png" width="500">
    <br>
    <img alt="Screenshot" src=".\frontend\public\Screenshot 2023-12-05 2.png" width="500">
</p>

## Built With

- HTML, CSS, JavaScript & React;
- Visual Studio, Git & GitHub;

### Running locally
To run this project, you only need a computer with a browser (like Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari, etc.) installed, and follow these steps:

1. In your terminal, type the following, to clone this repository:

```sh
$ git clone https://github.com/roopap12/Ecommerce-Shop.git
```

2. After, run the following commands in your terminal:

```sh
$ cd Ecommerce-Shop
$ npm install
$ cd frontend
$ npm start and in seperate terminal
$ cd backend
$ npm start

```
<details align="right">
<summary><small>What are these commands?</summary>
- the `$ cd` command is used to move to different folders.</small>
</details>

3. After 'npm start' on the front and back end the application will render in the browser.

## Authors

👤 Cameron White

- GitHub: [CamDubz](https://github.com/CamDubz)
- LinkedIn: [@Cameron-White](https://nz.linkedin.com/in/cameron-white-99b1511bb)


👤 Andrew Spence

- GitHub: [AndrewRobertSpence](https://github.com/AndrewRobertSpence)

👤 Roopa Patel

- GitHub: [roopap12](https://github.com/roopap12)
- LinkedIn: [@Roopa-Patel](https://nz.linkedin.com/in/xxxxxxxx)

## Show your support

Give a ⭐️ if you like this project!

