var DropdownItem = React.createClass({

  displayName: 'DropdownItem',

  render: function() {
    return (
      <li className="dropdown-item">{this.props.name}</li>
    );
  }
});
