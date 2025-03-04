const Slider = ({ value, onChange }) => {
    return (
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
        className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer"
      />
    )
  }
  
  export default Slider