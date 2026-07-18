import './Button.css'

export default function Button({
  children,
  type = 'button',
  variant = 'primary',
  className = '',
  ...rest
}) {
  return (
    <button type={type} className={`btn btn-${variant} ${className}`.trim()} {...rest}>
      {children}
    </button>
  )
}