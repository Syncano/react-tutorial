var App = React.createClass({

  displayName: 'App',

  getInitialState: function() {
    return {
      dropdownVisible: false
    }
  },

  dropdownToggle: function() {
    this.setState({
      dropdownVisible: !this.state.dropdownVisible
    })
  },

  getTransitions: function() {
    var transitions = {
      slideFadeIn: {
        opacity: [1, 0],
        scaleY: [1, 0.3],
        scaleX: [1, 0.3]
      },
      slideFadeInReverse: {
        opacity: [0, 1],
        scaleY: [0.3, 1],
        scaleX: [0.3, 1]
      }
    };

    return transitions;
  },

  render: function() {
    var transitions = this.getTransitions();
    var dropdownMenu = this.state.dropdownVisible ? <DropdownMenu visibility={this.state.dropdownVisible} handleOptionsClick={this.dropdownToggle} /> : null;

    return (
      <div className="main-wrapper">
        <div className="header">
          <div className="header-inner">
            <Icon type="options" fill="#ffffff" handleClick={this.dropdownToggle}/>
          </div>
        </div>
        <ReactVelocityTransitionGroup
          enter={transitions.slideFadeIn}
          leave={transitions.slideFadeInReverse}
          easing='linear'
          duration={1000}>
          {dropdownMenu}
        </ReactVelocityTransitionGroup>
      </div>
    );
  }
});

React.render(<App />,  document.body);
