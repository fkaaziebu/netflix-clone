import Billboard from "@/components/Billboard";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import useCurrentUser from "@/hooks/useCurrentUser";
import { redirect } from "next/navigation";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <Billboard />
    </div>
  );
}
