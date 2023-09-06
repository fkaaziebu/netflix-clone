import UserCard from "@/components/UserCard";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

interface UserCardProps {
  name: string | null | undefined;
}

const Profiles = async () => {
  const session = await getCurrentUser();

  if (!session?.user) {
    redirect("/auth");
  }

  return (
    <div className="profile">
      <div className="flex flex-col">
        <h1 className="profile-title">Who&#39;s watching?</h1>
        <div className="profile-pic_cover">
          <UserCard name={session.user.name} />
        </div>
      </div>
    </div>
  );
};

export default Profiles;
