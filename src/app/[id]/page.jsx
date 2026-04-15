"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { LuPhoneCall } from "react-icons/lu";
import { AiTwotoneMessage } from "react-icons/ai";
import { FiVideo } from "react-icons/fi";
import { useTimeline } from "@/context/TimelineContext";

const CardDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addTimeline } = useTimeline();
  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const Friend = data.find((item) => item.id === Number(id));
        setFriend(Friend || null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="flex justify-center items-center py-20">
        <h2 className="text-2xl font-semibold text-red-500">
          Friend not found
        </h2>
      </div>
    );
  }
  const handleAction = (type) => {
    addTimeline(type, friend.name);
    // toast need to add
    alert(`${type} added to timeline`);
  };
  const statusStyle = {
    "almost due": "bg-[#EFAD44] text-white",
    overdue: "bg-[#EF4444] text-white",
    "on-track": "bg-[#244D3F] text-white",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex flex-col items-center text-center">
            <Image
              src={friend.picture}
              alt={friend.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            />

            <h2 className="text-2xl font-bold text-[#1F2937] mt-4">
              {friend.name}
            </h2>

            <div className="mt-3">
              <span
                className={`px-4 py-1 rounded-full text-sm ${statusStyle[friend.status]}`}
              >
                {friend.status === "almost due"
                  ? "Almost Due"
                  : friend.status === "on-track"
                    ? "On-Track"
                    : "Overdue"}
              </span>
            </div>

            <div className="mt-4">
              <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm">
                {friend.tags.toUpperCase()}
              </span>
            </div>

            <p className="text-[#64748B] text-[16px] mt-5">{friend.bio}</p>
            <p className="text-[14px] text-[#64748B] mt-4">{friend.email}</p>
          </div>

          <div className="mt-8 space-y-3">
            <button className="w-full py-3 rounded-xl bg-gray-100 font-medium">
              Snooze 2 Weeks
            </button>
            <button className="w-full py-3 rounded-xl bg-gray-100 font-medium">
              Archive
            </button>
            <button className="w-full py-3 rounded-xl bg-red-50 text-red-500 font-medium">
              Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h3 className="text-xl font-bold">{friend.days_since_contact}</h3>
              <p className="text-gray-500 mt-2">Days Since Contact</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h3 className="text-xl font-bold">{friend.goal}</h3>
              <p className="text-gray-500 mt-2">Goal (Days)</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-6 text-center">
              <h3 className="text-xl font-bold">{friend.next_due_date}</h3>
              <p className="text-gray-500 mt-2">Next Due Date</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-[#1F2937]">
                Relationship Goal
              </h3>
              <p className="text-gray-500 mt-2">
                Contact every {friend.goal} days
              </p>
            </div>

            <button className="bg-[#244D3F] text-white px-4 py-2 rounded-xl">
              Edit
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#1F2937] mb-5">
              Quick Check-In
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => handleAction("Call")}
                className="btn text-[#1F2937] p-10 rounded-xl flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2 font-semibold">
                  <LuPhoneCall className="text-xl" />
                  <span>Call</span>
                </div>
              </button>

              <button
                onClick={() => handleAction("Text")}
                className="btn text-[#1F2937] p-10 rounded-xl flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2 font-semibold">
                  <AiTwotoneMessage className="text-xl" />
                  <span>Text</span>
                </div>
              </button>

              <button
                onClick={() => handleAction("Video")}
                className="btn text-[#1F2937] p-10 rounded-xl flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-2 font-semibold">
                  <FiVideo className="text-xl" />
                  <span>Video</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
