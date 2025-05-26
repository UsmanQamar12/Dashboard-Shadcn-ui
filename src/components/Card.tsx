import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react'
import React from 'react';


export type CardProps = {
    label: string,
    icon: LucideIcon,
    amount: string,
    description : string
}

export function Card({label,amount,description,icon: Icon,}: CardProps) {
  return (
    <div className={cn("rounded-xl border bg-card text-card-foreground shadow")}>
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="text-sm font-medium tracking-tight">{label}</h3>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{amount}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}


  export function CardContent(props: React.HTMLAttributes<HTMLDivElement>){
    return (
        <div
            {...props}
            className={cn("flex w-full flex-col gap-3 rounded-xl border p-5 shadow", props.className)}
      />
    )
  }
