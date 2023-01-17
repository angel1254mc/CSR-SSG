import logo from './logo.svg';
import './App.css';
import RainbowHeader from './components/RainbowHeader.js'

function App() {
  return (
    <div className="App">
      <RainbowHeader>Hello World</RainbowHeader>
      <div className="desc">This is an example of a single-page app that uses client-side rendering, bootstrapped with npx create-react-app. You start off with an empty HTML page, that is populated programmatically when the browser downloads the JS Bundle.</div>
    </div>
  );
}

export default App;
