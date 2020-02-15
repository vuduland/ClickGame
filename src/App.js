import React from 'react';
// import Navbar from './components/Navbar';
import Scores from './components/Scores.js';
import Jumbotron from './components/Jumbotron';
// import Navbar from './components/Navbar';
import Row from 'react-bootstrap/Row';
function App() {
  return (
    <div className='container'>
      <Row />
      {/* <Navbar /> */}
      <Scores />
      <Jumbotron />
    </div>
  );
}

export default App;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <h1> Clicky Game </h1>
//       </header>
//     </div>
//   );
// }

// export default App;
