const InputBox = ({ name, value, type, label, required, pattern, placeholder, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor={name} className="input-label">{label} {required ? <em>*</em> : null}</label>
      <input type={type} value={value} className="input-box-md" name={name} placeholder={placeholder} require={required} pattern={pattern} onChange={onChange} />
    </div>
  );
}

export default InputBox;