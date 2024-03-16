import React, { ReactNode } from "react";

const OrganizationLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="pt-20 md:pt-24 max-w-6xl 2xl:max-w-screen-xl mx-auto">
      {children}
    </main>
  );
};

export default OrganizationLayout;
