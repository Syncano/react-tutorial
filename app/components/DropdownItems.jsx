var DropdownItems = React.createClass({

  displayName: 'DropdownItems',

  getDefaultProps: function() {
    return {
      items: [
        'New tab',
        'New incognito tab',
        'Bookmarks',
        'Recent tabs',
        'History',
        'Print',
        'Settings',
        'Help & feedback'
      ]
    }
  },

  render: function() {
    var items = this.props.items.map(function(item, i) {
      return (<DropdownItem name={item} key={i} />);
    }.bind(this))
    return (
      <ul className="dropdown-items">
        {items}
      </ul>
    );
  }
});
