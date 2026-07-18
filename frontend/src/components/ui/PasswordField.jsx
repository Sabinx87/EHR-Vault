import { useState } from 'react'
import './TextField.css'
import './PasswordField.css'

export default function PasswordField({ id, label, ...rest }) {
  const [visible, setVisible] = useState(false)

  return (
    <div className="field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className="password-wrap">
        <input
          id={id}
          type={visible ? 'text' : 'password'}
          className="field-input"
          {...rest}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? 'Hide password' : 'Show password'}
          aria-pressed={visible}
        >
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href={`/icons.svg#${visible ? 'eye-off-icon' : 'eye-icon'}`}></use>
          </svg>
        </button>
      </div>
    </div>
  )
}