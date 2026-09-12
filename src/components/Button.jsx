import { Link } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

const sizes = {
  sm: 'px-4 py-2.5 text-[11px]',
  md: 'px-6 py-3.5 text-xs',
  lg: 'px-8 py-4 text-xs',
}

const variants = {
  primary: 'bg-gold-500 text-brand-950 hover:bg-gold-400 shadow-[0_1px_0_rgba(0,0,0,0.08)]',
  dark: 'bg-brand-900 text-cream-100 hover:bg-brand-800',
  light: 'bg-white text-brand-900 hover:bg-cream-200',
  whatsapp: 'bg-[#23B35A] text-white hover:bg-[#1d9d4e]',
  outline: 'border border-brand-900/20 text-brand-900 hover:border-gold-500 hover:text-gold-700',
  outlineLight: 'border border-cream-100/40 text-cream-100 hover:border-gold-400 hover:text-gold-200',
  ghost: 'text-cream-100 hover:text-gold-300',
}

export default function Button({
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  arrow = false,
  ariaLabel,
  state,
}) {
  const classes = `group/cbtn inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.14em] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${sizes[size]} ${variants[variant]} ${className}`

  const inner = (
    <>
      {children}
      {arrow && (
        <FiArrowUpRight
          aria-hidden="true"
          className="text-[1.15em] transition-transform duration-300 group-hover/cbtn:translate-x-0.5 group-hover/cbtn:-translate-y-0.5"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} state={state} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
        {inner}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {inner}
    </button>
  )
}