import React from "react";
import Accordion from "@/components/Accordion";
import Alerts from "@/components/Alerts";
import AnimatedComponents from "@/components/AnimatedComponents";
import Avatar from "@/components/Avatar";
import Badge from "@/components/Badge";
import Breadcrumb from "@/components/Breadcrumb";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CreditCard from "@/components/CreditCard";
import Headers from "@/components/Headers";
import Input from "@/components/Input";
import Skeleton from "@/components/Skeleton";
import Table from "@/components/Table";

const Home = () => {
  return (
    <main className="w-full h-auto py-10 px-20 flex items-center justify-center flex-col gap-10">
      <Avatar />
      <Alerts />
      <Accordion />
      <Badge />
      <Button />
      <Card />
      <Input />
      <AnimatedComponents />
      <Skeleton />
      <Skeleton />
      <Breadcrumb />
      <Headers />
      <Table />
      <CreditCard />
    </main>
  );
};

export default Home;
