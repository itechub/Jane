import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Menu } from "antd";

import styles from "./MenuMarkup.module.scss";

// ref: https://tomas.piestansky.cz/posts/2018/responsive-menu-ant-design/

const MenuMarkup = ({
  mobileVersion,
  activeLinkKey,
  onLinkClick,
  className
}) => (
  <Menu
    theme="light"
    mode={mobileVersion ? "vertical" : "horizontal"}
    selectedKeys={[`${activeLinkKey}`]}
    className={`${className} ${styles.menu}`}
  >
    <Menu.Item key="/">
      <Link onClick={onLinkClick} to="/">
        Home
      </Link>
    </Menu.Item>
  </Menu>
);

MenuMarkup.propTypes = {
  mobileVersion: PropTypes.bool,
  activeLinkKey: PropTypes.string.isRequired,
  className: PropTypes.string
};

MenuMarkup.defaultProps = {
  mobileVersion: false,
  className: "mobile-navigation"
};
export default MenuMarkup;
