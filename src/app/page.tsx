"use client";
import { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import extensionsData from "./data/data.json";
import Extensions from "./Components/Extensions";
import { Extension } from "./types";

export default function Home() {
  const [extensions, setExtensions] = useState<Extension[]>(extensionsData);
  const [filter, setFilter] = useState("all");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const handleThemeToggle = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
    setIsDark(htmlElement.classList.contains("dark"));

    // if (htmlElement.classList.contains('dark')) {
    //   localStorage.setItem('theme', 'dark');
    // } else {
    //   localStorage.setItem('theme', 'light');
    // }
  };

  const handleToggle = (name: string) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (name: string) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
  };

  const style = {
    backgroundImage: "linear-gradient(#04091c,#0a1542)",
    backgroundSize: "cover",
    backgroundPosition: "contain",
  };

  const lightStyle = {
    backgroundImage: "linear-gradient(#ebf2fc,#effbf9)",
    backgroundSize: "cover",
    backgroundPosition: "contain",
  };

  const baseClasses =
    "btn rounded-4xl dark:shadow-none dark:border-transparent";
  const filteredBtn = "bg-[#f35c55] text-black dark:bg-red-500 dark:text-white";
  const unfilteredBtn =
    "bg-[#2f354d] hover:border-red-500 dark:bg-white dark:text-black dark:hover:border-red-500";

  const filteredExtensions = extensions.filter((e: Extension) => {
    if (filter === "all") return true;
    if (filter === "active") return e.isActive;
    if (filter === "inactive") return !e.isActive;
    return true;
  });

  return (
    <main className="min-h-screen" style={isDark ? lightStyle : style}>
      <section className="container mx-auto pt-6">
        <Nav isDark={isDark} handleThemeToggle={handleThemeToggle} />
        <div className="flex flex-col md:flex-row justify-between items-center mt-15">
          <h1 className="font-bold text-3xl dark:text-black pb-5 md:p-0">
            Extensions List
          </h1>
          <div className="flex gap-3">
            <button
              className={`${baseClasses} ${
                filter === "all" ? filteredBtn : unfilteredBtn
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`${baseClasses} ${
                filter === "active" ? filteredBtn : unfilteredBtn
              }`}
              onClick={() => setFilter("active")}
            >
              Active
            </button>
            <button
              className={`${baseClasses} ${
                filter === "inactive" ? filteredBtn : unfilteredBtn
              }`}
              onClick={() => setFilter("inactive")}
            >
              Inactive
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 sm:grid-rows-12 md:grid-cols-2 md:grid-rows-6 lg:grid-cols-3 lg:grid-rows-4 gap-5 py-10">
          {filteredExtensions.map((e: Extension) => (
            <Extensions
              e={e}
              key={e.name}
              onToggle={() => handleToggle(e.name)}
              handleRemove={() => handleRemove(e.name)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
