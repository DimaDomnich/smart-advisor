import { TextInput as FlowbiteTextInput } from "flowbite-react";
import { cx } from "@/utils/cx";
import PropTypes from "prop-types";

const TextInput = ({ className, ...rest }) => {
  return (
    <FlowbiteTextInput
      className={cx("[&_input]:bg-white", className)}
      {...rest}
    />
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
};

export default TextInput;
