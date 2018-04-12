import {Button} from "./Button";

class App extends React.Component {
  const text = "Click this";
  render() {
    return (
      <h1>!My React App!</h1>
      <Button buttonText={text} />
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
