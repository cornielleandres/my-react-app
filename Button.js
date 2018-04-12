export Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button>
        {this.props.buttonText}
      </button>
    );
  }
}
