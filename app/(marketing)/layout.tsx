import React, { ReactNode } from "react";

const MaketingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      {/* Navbar */}
      <main className="pt-40 bg-20 bg-slate-100">{children}</main>
      {/* Footer */}
    </div>
  );
};

export default MaketingLayout;
