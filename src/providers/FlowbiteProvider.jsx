import PropTypes from "prop-types";
import { THEME } from "../theme";
import { Flowbite } from "flowbite-react";

const FlowbiteProvider = ({ children }) => {
  return <Flowbite theme={THEME}>{children}</Flowbite>;
};

FlowbiteProvider.propTypes = {
  children: PropTypes.node,
};

export default FlowbiteProvider;
