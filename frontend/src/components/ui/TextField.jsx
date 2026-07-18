import './Textfield.css'

export default function Textfield({ id, label, type = 'text', ...rest }) {
  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <input id={id} type={type} className="field-input" {...rest} />
    </div>
  )
}
