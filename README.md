# Interesting React Projects

This React app is a collection of various small react projects for the purpose of learning new concepts and practice coding in ReactJS.

### Folder structure

- Interesting React Projects has a simple home page in three parts inside main components folder.
- Navbar
- Individual Projects at center: Carousel displayed as default on Home page
- A projects section at bottom to navigate on different projects implemented using React Router.
- All different projects will sit inside projects folder in src
- Each project has all its parts like utility, components, styles etc inside its own folder

1. ### Carousel : Image Slider

- Implementing simple carousel(image slider) functionality in React JS with functions like next image, previous image, auto update image after a few second and go to any images

2. ### Like Button

- Implement a interactive like button functionality
- Changes color on hover or liked/unlike
-
- #### API POST request
- url: https://www.greatfrontend.com/api/questions/like-button
- HTTP Method: 'POST'
  Content Type:'json'
- request body- 'action':like or unlike
- const response = await fetch(url, {
  method: 'POST',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify({ action: liked ? 'unlike' : 'like' }),
  });
- #### Response : 50% chance of success or failure
- Success:'{message:'some'}'
  Failure:'{message:';some msg'}'
