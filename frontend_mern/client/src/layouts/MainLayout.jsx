import React from "react";
import { useLocation } from "react-router-dom";
import MainNavbar from "../components/MainNavbar";
import AuthNavbar from "../components/AuthNavbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  const authPages = ["/login", "/signup"];
  const isAuth = authPages.includes(pathname);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {isAuth ? <AuthNavbar /> : <MainNavbar />}

      <main className="flex-grow pt-20">{children}</main>

      {!isAuth && <Footer />}
    </div>
  );
}
