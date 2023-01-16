import logo from './logo.svg';
import './App.css';
import RainbowHeader from './components/RainbowHeader.js'

function App() {
  return (
    <div className="App">
      <RainbowHeader>Hello World</RainbowHeader>
      <div className="desc">This is an example of a single-page app that uses client-side rendering. Made with npx create-react-app, so it bundles using Webpack</div>
    </div>
  );
}

export default App;
