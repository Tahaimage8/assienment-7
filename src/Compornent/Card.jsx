import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ friend }) => {
  const { id, picture, name, days_since_contact, tags, status } = friend;

  const statusStyle = {
    "almost due": "bg-[#EFAD44] text-white",
    overdue: "bg-[#EF4444] text-white",
    "on-track": "bg-[#244D3F] text-white",
  };

  return (
    <Link href={`/${id}`}>
      <div className="bg-white rounded-2xl shadow-md p-6 text-center cursor-pointer hover:shadow-lg transition">
        <div className="flex justify-center">
          <Image
            src={picture}
            alt={name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
        </div>

        <h3 className=" mt-4 text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1">{days_since_contact}d ago</p>

        <div className="mt-3">
          <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
            {tags.toUpperCase()}
          </span>
        </div>

        <div className="mt-3">
          <span
            className={`px-4 py-1 text-sm rounded-full ${statusStyle[status]}`}
          >
            {status === "almost due"
              ? "Almost Due"
              : status === "on-track"
                ? "On-Track"
                : "Overdue"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
