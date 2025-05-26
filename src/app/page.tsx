"use client";
import PageTitle from "@/components/PageTitle";
import { Card, CardContent, CardProps } from "@/components/Card";
import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign,
  },
  {
    label: "Subscription",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users,
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard,
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity,
  },
];

const userSalesData: SalesProps[]= [
  {
    name: "Olivar Martin",
    email: "olivia.martin@gmail.com",
    saleAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "jackson@gmail.com",
    saleAmount: "+$1,99.00"
  },{
    name: "Isabella Nguyen",
    email: "isabella.nguyen@gmail.com",
    saleAmount: "+$39.00"
  },{
    name: "William Kim",
    email: "william.kim@gmail.com",
    saleAmount: "+$299.00"
  },{
    name: "kin jack",
    email: "kin.jee@gmail.com",
    saleAmount: "+$199.00"
  },
  
]

export default function Home() {
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent className="flex flex-col w-full">
          <p className="p-4 font-semibold">Overview</p>
          <div className="flex justify-center w-full h-96"> 
            <div className="w-full h-full"> 
              <BarChart />
            </div>
          </div>
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Sales</p>
            <p className="text-sm text-gray-400">
              You made 265 sales this month
            </p>
          </section>
          {userSalesData.map((d, i) => (
            <SalesCard
            key={i}
            email={d.email}
            name={d.name}
            saleAmount={d.saleAmount}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}