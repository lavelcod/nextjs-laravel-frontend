import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <TopNav/>
        <Menu/>
      </header>
    </div>
  );
}
