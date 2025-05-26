"use client"
import React from 'react';
import { DataTable } from '@/components/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import PageTitle from '@/components/PageTitle';



type Props = object; // This allows any object type

export default function Userpage({}: Props) {
  return (
    <div className='flex flex-col gap-5 w-full'> 
      <PageTitle title="Users"/>
      <DataTable columns={columns} data={data} />

    </div>
  );
}
 type Payment = {
  name: string;
  email: string;
  lastOrder: string;
  method: string;
}
 
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({  row }) => (
      <div className='flex items-center gap-2'>
          <img className="h-10 w-10" src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${row.getValue("name")}`} alt="user-image" />
        <p>{row.getValue("name")}</p>
      </div>
    )
  },
  {
    accessorKey: "email",
    header: "Email",
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
    name: "John Doe",
    email: "John@gmail.com",
    lastOrder: "2024-5-01",
    method: "Credit Card"
  },
  {
    name: "Alice Smith",
    email: "alice@gmail.com",
    lastOrder: "2025-7-02",
    method: "PayPal"
  },{
    name: "Bob Johnson",
    email: "bob@gmail.com",
    lastOrder: "2023-10-03",
    method: "Bank Transfer"
  },{
    name: "Emily Davis",
    email: "davis@gmail.com",
    lastOrder: "2022-12-04",
    method: "Cryptocurrency"
  },{
    name: "Michael Brown",
    email: "micheal@gmail.com",
    lastOrder: "2023-11-10",
    method: "PayPal"
},
{
    name: "Liam Wilson",
    email: "Lia@gmail.com",
    lastOrder: "2023-1-09",
    method: "Google Pay"
},{
    name: "Noah Richard",
    email: "noah@gmail.com",
    lastOrder: "2023-7-03",
    method: "PayPal"
},{
    name: "Ava Loped",
    email: "ava@gmail.com",
    lastOrder: "2025-10-01",
    method: "WeChat Pay"
},{
    name: "micheal jiny",
    email: "jinny@gmail.com",
    lastOrder: "2023-5-06",
    method: "Bank Transfer"
},{
    name: "micheal micel",
    email: "micel@gmail.com",
    lastOrder: "2024-5-02",
    method: "PayPal"
},{
    name: "John kit",
    email: "kit@gmail.com",
    lastOrder: "2024-2-06",
    method: "Bank Transfer"
},{
    name: "laila sing",
    email: "laila@gmail.com",
    lastOrder: "2025-10-06",
    method: "Credit Card"
},{
    name: "Ramiz Khan",
    email: "ramiz@gmail.com",
    lastOrder: "2024-5-06",
    method: "Bank Transfer"
},{
    name: "Chingo Lee",
    email: "lee@gmail.com",
    lastOrder: "2023-5-06",
    method: "Credit Card"
}
]
