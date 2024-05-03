"use client"

import { formatAmount } from '@/lib/utils'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className='w-full'>
        <CountUp 
            prefix='$'
            decimals={2}
            decimal='.'
            duration={2.75}
            end={amount} />
    </div>
  )
}

export default AnimatedCounter