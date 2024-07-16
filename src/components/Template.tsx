"use client";

import { sendGTMEvent } from "@next/third-parties/google";

import Link from "next/link";
import { FC, useEffect } from "react";

interface TemplateProps {
  title: string;
  nextPage: { label: string; href: string };
}

const Template: FC<TemplateProps> = ({ title, nextPage }) => {
  return (
    <main className="min-h-screen grid place-content-start justify-items-start p-24 gap-12">
      <h1 className={"text-3xl"}>{title}</h1>
      <Link
        onClick={() => sendGTMEvent({ event: "buttonClicked", value: "xyz" })}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href={nextPage.href}
      >
        {nextPage.label}
      </Link>
    </main>
  );
};

export default Template;
