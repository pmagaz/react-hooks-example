## Example of use of React Hooks 

React Hooks is still in alpha version ( 16.8.0-alpha.0 )

### Installing

You can clone our Git repository:

`$ git clone https://github.com/pmagaz/react-hooks-example

### Starting Dev Server

Execute yarn start or npm run start to start the development server and the example.

### Architecture

* `MyContainer.jsx` it's just a regular component wrapped with createConsumer and acting like a 'container'. The container passes the store and its actions to its childs components.

* `ChildComponent.jsx` it's a childcomponent and receives the store by its props.

### Warning

This is a pretty basic example for educational purposes. DON'T use it in production.