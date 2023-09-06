import Button from "@/components/Button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getCurrentUser();

  if (!session?.user) {
    redirect("/auth");
  }

  return (
    <div>
      <h1 className="text-4xl text-green-500">NetFlix Clone</h1>
      <p className="text-white">Logged in as: {session.user?.email}</p>
      <Button />
    </div>
  );
}
