
'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      className={clsx(className, 'relative')}
      initial={{ opacity: 1 }}
      whileHover={{ opacity: 0.8 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src="/cima-logo.png"
        alt="CIMA Animal Health"
        width={180}
        height={49}
        className="h-full w-auto object-contain"
        priority
      />
    </motion.div>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <div className={clsx(className, 'relative')}>
      <Image
        src="/cima-logo.png"
        alt="CIMA Animal Health"
        fill
        className="object-contain"
      />
    </div>
  )
}
