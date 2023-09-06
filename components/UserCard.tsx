"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";

const images = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  const imgSrc = images[Math.floor(Math.random() * 4)];

  const router = useRouter();

  const selectProfile = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div onClick={() => selectProfile()}>
      <div className="group flex-row w-44 mx-auto">
        <div className="profile-pic_edit">
          <img
            draggable={false}
            className="w-max h-max object-contain"
            src={imgSrc}
            alt=""
          />
        </div>
        <div className="profile-name">{name}</div>
      </div>
    </div>
  );
};

export default UserCard;
