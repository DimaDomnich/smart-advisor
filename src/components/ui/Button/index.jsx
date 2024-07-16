import { Button as FlowbiteButton } from "flowbite-react";
import { node } from "prop-types";

const Button = ({ children, ...rest }) => {
  return (
    <FlowbiteButton size="sm" {...rest}>
      {children}
    </FlowbiteButton>
  );
};

Button.propTypes = {
  children: node,
};

export default Button;
