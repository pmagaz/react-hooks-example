## Example of use of React Hooks 

React Hooks is still in alpha version. This example is using React 16.8.0-alpha.0. Please check official documentation in https://reactjs.org/docs/hooks-intro.html.

### Installing

You can clone our Git repository:

`$ git clone https://github.com/pmagaz/react-hooks-example

### Starting Dev Server

Execute yarn start or npm run start to start the development server and the example.

### Architecture

* `MyContainer.jsx` it's just a regular component wrapped with createConsumer and acting like a 'container'. The container passes the store and its actions to its childs components.

### Warning

This is a pretty basic example for educational purposes and using an Alpha version. DON'T use it in production.