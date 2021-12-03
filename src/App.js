import logo from './logo.svg';
import './App.css';
import LineAnimation from './components/LineAnimation';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Hello</h1>
      <p>Welcome to my project</p>
      <p>Here I will demonstrate a few examples of applying animations using HCI-Driven Concepts</p>
      <h1>Let's get started, shall we?</h1>
      <p>The focus will be on how to maintain the user's attention, and changing the user's focus.</p>
      <p>This can be done with the power of moving elements using animations!</p>
      <p>For the first demonstration, please click the button below</p>
      <LoadingAnimation />
      <p>Did you notice the loading animation that got you here?</p>
      <p></p>
      <p>Pretty cool, right? Okay! Moving on, let's get to another demonstration: </p>
      <h1>The power of notifications!</h1>
      <LineAnimation />
      <p>Pop-up notifications are a subtle, yet helpful way of letting the user know of any changes in status or information regarding their interactions with the page.</p>

    </div>
  );
}

export default App;
