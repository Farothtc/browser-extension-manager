"use client";
import Image from "next/image";
import { useState } from "react";
import Nav from "./Components/Nav";
import extensionsData from "./data/data.json";
import Extensions from "./Components/Extensions";
import { Extension } from "./types";

export default function Home() {
  const [extensions, setExtensions] = useState<Extension[]>(extensionsData);
  const [filter, setFilter] = useState("all");

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

  const baseClasses = "btn rounded-4xl";
  const filteredBtn = "bg-[#f35c55] text-black";
  const unfilteredBtn = "bg-[#2f354d]";

  const filteredExtensions = extensions.filter((e: Extension) => {
    if (filter === "all") return true;
    if (filter === "active") return e.isActive;
    if (filter === "inactive") return !e.isActive;
    return true;
  });

  return (
    <main className="min-h-screen" style={style}>
      <section className="container mx-auto pt-6">
        <Nav />
        <div className="flex justify-between items-center mt-15">
          <h1 className="font-bold text-3xl">Extensions List</h1>
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
        <div className="grid grid-cols-3 grid-rows-4 gap-5 py-10">
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
