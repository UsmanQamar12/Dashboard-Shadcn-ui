"use client"
import React from 'react';
import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import PageTitle from '@/components/PageTitle';
import { cn } from '@/lib/utils';




type Props = object; // This allows any object type

export default function Orderpage({}: Props) {
  return (
    <div className='flex flex-col gap-5 w-full'> 
      <PageTitle title="Orders"/>
      <DataTable columns={columns} data={data} />

    </div>
  );
}
 type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  method: string;
}
 
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) =>{
      return <div className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
        "bg-red-400": row.getValue("status") === "Pending",
        "bg-orange-200": row.getValue("status") === "Processing",
        "bg-green-400": row.getValue("status") === "Completed",
      })}>
         {row.getValue("status")}
         </div>
    }
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
   {
    accessorKey: "method",
    header: "Method",
  },
]

export const data: Payment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-5-15",
    method: "Credit Card"
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-5-15",
    method: "Cryptocurrency"
  }, {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2024-5-12",
    method: "Bank Transfer"
  },
   {
    order: "ORD004",
    status: "Processing",
    lastOrder: "2025-1-15",
    method: "Google Pay"
  }, {
    order: "ORD005",
    status: "Pending",
    lastOrder: "2022-5-1",
    method: "Credit Card"
  }, {
    order: "ORD006",
    status: "Completed",
    lastOrder: "2023-5-10",
    method: "Stripe"
  }, {
    order: "ORD007",
    status: "Pending",
    lastOrder: "2023-5-15",
    method: "Bank Transfer"
  }, {
    order: "ORD008",
    status: "Processing",
    lastOrder: "2025-10-15",
    method: "Credit Card"
  }, {
    order: "ORD009",
    status: "Pending",
    lastOrder: "2023-5-15",
    method: "PayPal"
  }, {
    order: "ORD010",
    status: "Completed",
    lastOrder: "2023-5-15",
    method: "PayPal"
  },
   {
    order: "ORD011",
    status: "Completed",
    lastOrder: "2023-5-1",
    method: "WeChat Pay"
  }, {
    order: "ORD012",
    status: "Pending",
    lastOrder: "2023-8-11",
    method: "PayPal"
  },
]
