import PropTypes from "prop-types";

function Button({ title, onClick, variant = "btn-contained", disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 h-10 uppercase ${
        variant === "btn-contained" && "bg-btn text-white"
      } ${variant === "btn-outlined" && "border-btn text-btn bg-white"} ${
        disabled && "opacity-50 cursor-not-allowed"
      }`}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
