import React from "react";
import DashboardAside from "@/app/components/templates/DashboardAside";

interface layoutProps {
  children: React.ReactNode;
}
const layout = ({ children }: layoutProps) => {
  return <DashboardAside>{children}</DashboardAside>;
};

export default layout;
