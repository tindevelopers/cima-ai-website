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
        src="/petstore-ai-logo.png"
        alt="CIMA Animal Health"
        width={150}
        height={40}
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
        src="/petstore-ai-logo.png"
        alt="CIMA Animal Health"
        fill
        className="object-contain"
      />
    </div>
  )
}
