import React, { Component } from "react";
import PropTypes from "prop-types";
import throttle from "lodash/throttle";

import { Icon, Popover } from "antd";

import "./NavBar.scss";

class NavBar extends Component {
  state = {
    viewportWidth: 0,
    menuVisible: false
  };

  saveViewportDimensions = throttle(() => {
    this.setState({
      viewportWidth: window.innerWidth
    });
  }, this.props.applyViewportChange);

  componentDidMount() {
    this.saveViewportDimensions();
    window.addEventListener("resize", this.saveViewportDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.saveViewportDimensions);
  }

  handleMenuVisibility = menuVisible => {
    this.setState({ menuVisible });
  };

  render() {
    const MenuMarkup = this.props.menuMarkup;

    if (this.state.viewportWidth > this.props.mobileBreakPoint) {
      return <MenuMarkup activeLinkKey={this.props.activeLinkKey} />;
    }

    return (
      <Popover
        content={
          <MenuMarkup
            onLinkClick={() => this.handleMenuVisibility(false)}
            activeLinkKey={this.props.activeLinkKey}
            mobileVersion
          />
        }
        trigger="click"
        placement={this.props.placement}
        visible={this.state.menuVisible}
        onVisibleChange={this.handleMenuVisibility}
      >
        <Icon className="iconHamburger" type="menu" />
      </Popover>
    );
  }
}

NavBar.propTypes = {
  mobileBreakPoint: PropTypes.number,
  applyViewportChange: PropTypes.number,
  activeLinkKey: PropTypes.string.isRequired,
  placement: PropTypes.string,
  menuMarkup: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
};

NavBar.defaultProps = {
  mobileBreakPoint: 768,
  applyViewportChange: 250,
  placement: "bottom"
};

export default NavBar;
