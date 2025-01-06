import PropTypes from 'prop-types';

export default function Button({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 rounded-lg font-bold text-white shadow-md hover:opacity-90`}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.string.isRequired, // Prop for button color
  text: PropTypes.string.isRequired,  // Prop for button text
  onClick: PropTypes.func,            // Prop for click handler (optional)
};

Button.defaultProps = {
  onClick: () => {}, // Default action if no onClick function is passed
};
