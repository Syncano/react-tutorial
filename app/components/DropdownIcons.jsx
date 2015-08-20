var DropdownIcons = React.createClass({

  displayName: 'DropdownIcons',

  getDefaultProps: function() {
    return {
      items: ['arrow', 'reload', 'star']
    }
  },

  render: function() {
    var items = this.props.items.map(function(item, i) {
      return (<li><Icon type={item} key={i} /></li>);
    }.bind(this))
    return (
      <ul className="dropdown-icons">
        {items}
      </ul>
    );
  }
});
