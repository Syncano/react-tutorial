var DropdownMenu = React.createClass({

  displayName: 'DropdownMenu',

  render: function() {
    return (
      <div className="dropdown-menu">
        <div className="dropdown-header">
          <DropdownIcons />
          <div className="dropdown-toggle">
            <Icon type="options" handleClick={this.props.handleOptionsClick} fill="#0091EA"/>
          </div>
        </div>
        <DropdownItems />
      </div>
    );
  }
});
