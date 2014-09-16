/** @jsx React.DOM */

$.Velocity.RegisterUI("slideFadeIn", {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      scaleY: [1, 0.3],
      scaleX: [1, 0.3],
    }]]
});

$.Velocity.RegisterUI("slideInTop", {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      translateY: [0, -30],
    }]]
});

$.Velocity.RegisterUI("slideInLeft", {
    defaultDuration: 100,
    calls: [[{
      opacity: [1, 0],
      translateX: [0, 30],
    }]]
});

var menuVisible = false;

$('button').on('click', function(e){
  if (!menuVisible) {
    e.preventDefault();
    $('.dropdown-menu').velocity("slideFadeIn", {easing: 'ease-in', duration: 75});
    $('.dropdown-menu .dropdown-icons li').velocity("slideInLeft", {
      stagger: 40,
      duration: 350,
      easing: [0.610, 0.870, 0.710, 1.000],
    });
    $('.dropdown-menu .dropdown-item').velocity("slideInTop", {
      stagger: 30,
      duration: 250,
      easing: [0.610, 0.870, 0.710, 1.000],
    });
    menuVisible = true;
  } else {
    e.preventDefault();
    $('.dropdown-menu').velocity("reverse");
    $('.dropdown-menu .dropdown-item').velocity("reverse");
    menuVisible = false;
  }
});

var Tab = React.createClass({

  handleClick: function() {
    this.props.handleClick(this.props.data);
  },

  render: function() {
    var classes = React.addons.classSet({
      'tab': true,
      'tab-active': this.props.active,
    });
    return (
      <li className={classes} onClick={this.handleClick}>
        <Icon type={this.props.data.icon} />
      </li>
    );
  }
});

var TabGroup = React.createClass({

  render: function() {
    var tabs = this.props.tabs.map(function(tab, i) {
      var active = this.props.activeTab === i + 1;
      return (<Tab data={tab} active={active} key={tab.id} handleClick={this.props.handleClick} />);
    }.bind(this))
    return (
      <ul className="tab-group" ref="tabs">
        {tabs}
      </ul>
    );
  }
});