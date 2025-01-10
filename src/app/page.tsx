import Footer from "@/shared/footer";
import Navbar from "../shared/navbar";
import Landing from "@/shared/landing";
import Offer from "@/shared/offerSection";
import KnowThem from "@/shared/knowThem";
import Merch from "@/shared/merch";
import "../styles/globals.css";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-yellow-400 to-orange-500 min-h-screen">
      <Navbar />
      <Landing />
      <Offer />
      <Merch />
      <KnowThem />
      <Footer />
    </main>
  );
}
