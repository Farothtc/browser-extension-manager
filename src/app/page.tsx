import Image from "next/image";
import Nav from "./Components/Nav";

export default function Home() {
  const style = {
    backgroundImage: "linear-gradient(#04091c,#0a1542)",
    backgroundSize: "cover",
    backgroundPosition: "contain",
  };
  return (
    <main className="min-h-screen" style={style}>
      <section className="container mx-auto pt-6">
        <Nav />
        <h1>Helo</h1>
      </section>
    </main>
  );
}
