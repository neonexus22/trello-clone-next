import React, { ReactNode } from "react";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex gap-x-7">
        <div className="w-64 shrink-0 hidden md:block">{/* Sidebar */}</div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
