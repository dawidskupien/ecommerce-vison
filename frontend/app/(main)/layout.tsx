import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";


interface layoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: layoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
