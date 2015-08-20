var DropdownMenu = React.createClass({

  displayName: 'DropdownMenu',

  componentWillUpdate: function(nextProps, nextState) {

    $.Velocity.RegisterUI("slideFadeIn", {
      defaultDuration: 100,
      calls: [[{
        opacity: [1, 0],
        scaleY: [1, 0.3],
        scaleX: [1, 0.3]
      }]]
    });

    $.Velocity.RegisterUI("slideInTop", {
      defaultDuration: 100,
      calls: [[{
        opacity: [1, 0],
        translateY: [0, -30]
      }]]
    });

    $.Velocity.RegisterUI("slideInLeft", {
      defaultDuration: 100,
      calls: [[{
        opacity: [1, 0],
        translateX: [0, 30]
      }]]
    });

    if (nextProps.visibility) {
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
    } else {
      $('.dropdown-menu').velocity("reverse", {display: 'none'});
      $('.dropdown-menu .dropdown-item').velocity("reverse");
    }
  },

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
