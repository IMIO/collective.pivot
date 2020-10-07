'use strict';

const e = React.createElement;

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'Youhouuuuuu';
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Coucou'
    );
  }
}


const domContainer = document.querySelector('#root');ReactDOM.render(e(Hello), domContainer);
