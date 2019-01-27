import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu } from "antd";

// ref: https://tomas.piestansky.cz/posts/2018/responsive-menu-ant-design/

const MenuMarkup = ({
  mobileVersion,
  activeLinkKey,
  onLinkClick,
  className
}) => (
  <Menu
    theme={"light"}
    mode={mobileVersion ? "vertical" : "horizontal"}
    selectedKeys={[`${activeLinkKey}`]}
    className={className}
    style={{ lineHeight: "64px" }}
  >
    <Menu.Item key="/">
      <Link onClick={onLinkClick} to="/">
        Home
      </Link>
    </Menu.Item>
    <Menu.Item key="/about">
      <Link onClick={onLinkClick} to="/about">
        About
      </Link>
    </Menu.Item>
  </Menu>
);

MenuMarkup.propTypes = {
  mobileVersion: PropTypes.bool,
  activeLinkKey: PropTypes.string.isRequired,
  onLinkClick: PropTypes.func,
  className: PropTypes.string
};

MenuMarkup.defaultProps = {
  mobileVersion: false,
  className: "mobile-navigation"
};

export default MenuMarkup;
