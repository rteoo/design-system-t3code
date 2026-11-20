"use client"

import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'

export function GuideActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/layouts/" prefetch={false} data-slot="button" className={buttonVariants({ size: 'lg' })}>Try the layouts <ArrowRight data-icon="inline-end" /></Link>
      <a href="#components" data-slot="button" className={buttonVariants({ size: 'lg', variant: 'outline' })}>See the components <ArrowDown data-icon="inline-end" /></a>
    </div>
  )
}

export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} data-slot="button" className={buttonVariants({ variant: 'outline' })}>{children}<ArrowUpRight data-icon="inline-end" /></a>
}
