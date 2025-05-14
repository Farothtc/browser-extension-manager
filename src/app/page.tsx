"use client";
import Image from "next/image";
import { useState } from "react";
import Nav from "./Components/Nav";
import extensionsData from "./data/data.json";
import Extensions from "./Components/Extensions";
import { Extension } from "./types";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const style = {
    backgroundImage: "linear-gradient(#04091c,#0a1542)",
    backgroundSize: "cover",
    backgroundPosition: "contain",
  };

  const baseClasses = "btn rounded-4xl";
  const filteredBtn = "bg-[#f35c55] text-black";
  const unfilteredBtn = "bg-[#2f354d]";

  const element = extensionsData.map((e: Extension, index: number) => (
    <Extensions e={e} key={index} />
  ));

  console.log(extensionsData);
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
        <div>{element}</div>
      </section>
    </main>
  );
}
