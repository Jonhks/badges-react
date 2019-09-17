// import React from 'react';
// import ReactDOM from 'react-dom';

// const container = document.getElementById('app');

// const element = <h1>Hello, Platzi Badges</h1>;
// ReactDOM.render(element, container);



// const  element = document.createElement('h1')
// element.innerText = 'Hello Jonh!'

// const container = document.getElementById('app')
// container.appendChild(element)



// import  React from 'react'
// import ReactDOM from 'react-dom'


// const element = <h1> Hello Jonh con JSX </h1>
// const container = document.getElementById('app')


// // ReactDOM.render(que, donde)
// ReactDOM.render(element, container)






// const element = React.createElement('h1', {}, 'Hola con los children')
// van los props
// const element = React.createElement('a', {href: 'https://google.com'}, 'Ir a Google')
// const sum  = () => 3+3
// const element = React.createElement('h1', {}, `Hola soy ${name}`)
// const element = <h1> Hola Soy, {sum()} </h1>

// const element = React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h1',{},`Holooooooo ${name}`),
  //   React.createElement( 'p',{},'Soy un FE en busca de chamba')
  // )
  
  // const name = 'Javier'
  // const element = <div>
  //   <h1>Hola, soy {name} </h1>
  //   <p> Soy un Front End en usca de chamba </p>
  // </div>


  import  React from 'react'
  import ReactDOM from 'react-dom'
  import 'bootstrap/dist/css/bootstrap.css'
  import './global.css'
  // import miFoto from './images/yo2.jpeg'
  
  
  // // import Badge from './components/Badge'
  // import Badges from './pages/Badges'
  import App from './components/App' 

  const container = document.getElementById('app')
  
  
  // ReactDOM.render(que, donde)
  ReactDOM.render(<App />, container)
