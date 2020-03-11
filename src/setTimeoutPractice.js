import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() { // 6초 후에 함수 발동
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}

export default App;