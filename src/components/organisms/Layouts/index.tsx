import React, { ReactNode } from "react";
import Head from "next/head";
import Navigation from "../../molecules/Navigation";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navigation />
    {children}
    <footer className="p-5 mt-10 text-center">
      <p className="text-slate-400 underline">Build With Sarrahman</p>
    </footer>
  </div>
);

export default Layout;
