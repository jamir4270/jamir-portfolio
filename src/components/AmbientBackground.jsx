import { motion } from 'framer-motion'

const nodes = [
  ['-left-24 -top-24', '#caf0f8', 560],
  ['right-[-140px] top-[8%]', '#ade8f4', 500],
  ['left-[28%] top-[38%]', '#E0F8F5', 460],
  ['right-[5%] bottom-[-120px]', '#E0F2FE', 520],
  ['left-[-100px] bottom-[5%]', '#ECFDF5', 420],
]

export default function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white" aria-hidden="true">
      {nodes.map(([pos, color, size], i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full opacity-55 ${pos}`}
          style={{ width: size, height: size, background: color, filter: 'blur(110px)' }}
          animate={{ x: [0, 18, -10, 0], y: [0, -14, 12, 0], scale: [1, 1.04, 0.98, 1] }}
          transition={{ duration: 28 + i * 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}
