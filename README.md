# Interesting React Projects

This React app is a collection of various small React projects to learn new concepts and practice coding in ReactJS.

View project: https://interesting-react-projects.netlify.app/

### Folder structure

- Interesting React Projects has a simple home page in three parts inside the main components folder.
- Navbar
- Individual Projects at center: Carousel displayed as default on the Home page
- A projects section at the bottom to navigate different projects implemented using React Router.
- All different projects will sit inside the projects folder in the src
- Each project has all its parts like utility, components, styles, etc inside its folder

### Top features of the project

- #### Scalability and maintainability
- Projects can be scaled up because of its good folder structure
- App is divided into various reusable modules with independent components and styles as well as global custom hooks, utility functions and constants data.

- #### React Router DOM
- It uses react router package to handle routing efficiently
- Nested routing technique is used in Quiz game project

- #### Breadcrumbs
- Breadcrumbs feature is added for nested routes to indicate the page you are on.
- Also you can navigate on different pages using breadcrumbs.

1. ### Carousel: Image Slider

- Implementing simple carousel(image slider) functionality in React JS with functions like next image, previous image, auto update image after a few seconds and go to any images

2. ### Like Button

- Implement an interactive like button functionality
- Changes color on hover or liked/unlike

  #### API POST request

- URL: https://www.greatfrontend.com/api/questions/like-button
- HTTP Method: 'POST'
  Content Type:'json'
- request body- 'action':like or unlike
- const response = await fetch(URL, {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({ action: liked ? 'unlike' : 'like' }),
  });
  #### Response: 50% chance of success or failure
- Success:'{message:'some'}'
  Failure:'{message:';some msg'}'
