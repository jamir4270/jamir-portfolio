export const EASE = [0.22, 1, 0.36, 1]

export const DUR = {
  instant: 0.18,
  short: 0.3,
  base: 0.55,
  slow: 0.8,
}

export const DIST = {
  sm: 12,
  md: 24,
}

export const SPRING_SOFT = { type: 'spring', stiffness: 250, damping: 24 }
// iOS-like springs: critically damped, no overshoot. SPRING for content, SNAP for controls.
export const SPRING = { type: 'spring', stiffness: 260, damping: 32, mass: 1 }
export const SNAP = { type: 'spring', stiffness: 520, damping: 42, mass: 0.8 }
export const SPRING_SMOOTH = { type: 'spring', stiffness: 120, damping: 28 }
