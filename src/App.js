import logo from './logo.svg';
import './App.css';
import LineAnimation from './components/LineAnimation';
import LoadingAnimation from './components/LoadingAnimation';

function App() {
  return (
    <div className="App">
      <div className="verticalSlideshow">
      {/* first slide */}
      <div className="first">
        <h1 className="textColor">Hello</h1>
        <p className="textColor">Welcome to my project</p>
        <p className="textColor">Here I will demonstrate a few examples of applying animations using HCI-Driven Concepts</p>
      </div>
      {/* second slide */}
      <div className="second">
        <h1 className="textColor">Let's get started, shall we?</h1>
      </div>
      {/* third slide */}
      <div className="third">
        <p className="textColor">The focus will be on how to maintain the user's attention, and changing the user's focus.</p>
        <p className="textColor">This can be done with the power of moving elements using animations!</p>
        <p className="textColor">For the first demonstration...</p>
      </div>
      {/* fourth slide */}
      <div className="fourth">
        <LoadingAnimation />
      </div>
      {/* fifth slide */}
      <div className="fifth">
        <p className="textColor">Did you notice the loading animation that got you here?</p>
        <p className="textColor">(This will be text talking about loading)</p>
        <p className="textColor">Pretty cool, right? Okay! Moving on, let's get to another demonstration: </p>
      </div>
      {/* sixth slide */}
      <div className="sixth">
        <h1 className="textColor">The power of notifications!</h1>
      </div>
      {/* seventh slide */}
      <div className="seventh">
        <LineAnimation />
      </div>
      {/* eighth slide */}
      <div className="eighth">
        <p className="textColor">Pop-up notifications are a subtle, yet helpful way of letting the user know of any changes in status or information regarding their interactions with the page.</p>
      </div>
      {/* last slide */}
      <div className="last">
        <p classname="textColor">Refresh your browser to see it all again!</p>
      </div>
      </div>
    </div>
  );
}

export default App;
