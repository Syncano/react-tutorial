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

  render: function() {
    return (
      <div className="main-wrapper">
        <div className="header">
          <div className="header-inner">
            <Icon type="options" fill="#ffffff" handleClick={this.dropdownToggle}/>
          </div>
        </div>
        <DropdownMenu visibility={this.state.dropdownVisible} handleOptionsClick={this.dropdownToggle} />
      </div>
    );
  }
});

React.render(<App />,  document.body);
