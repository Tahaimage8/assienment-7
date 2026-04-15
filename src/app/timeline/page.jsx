"use client";

import { useState } from "react";
import { useTimeline } from "@/context/TimelineContext";
import { FiVideo } from "react-icons/fi";
import { AiTwotoneMessage } from "react-icons/ai";
import { LuPhoneCall } from "react-icons/lu";

const TimelinePage = () => {
  const { timeline } = useTimeline();
  const [filter, setFilter] = useState("all");

  const filteredTimeline =
    filter === "all"
      ? timeline
      : timeline.filter((item) => item.type.toLowerCase() === filter);

  return (
    <div className="w-200 mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-[#1F2937] mb-6">Timeline</h1>

      <div className="mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="select select-bordered w-full max-w-xs rounded-xl"
        >
          <option value="all">Filter timeline</option>
          <option value="call">Call</option>
          <option value="text">Text</option>
          <option value="video">Video</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-md p-10 text-center text-gray-500">
            No interactions yet.
          </div>
        ) : (
          filteredTimeline.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md px-5 py-4  "
            >
              <h3 className="text-lg text-[#1F2937]">
                <span className="font-semibold text-[#244D3F]">
                 <span className="flex items-center gap-3"> {item.type === "Call" ? (<LuPhoneCall />) : item.type === "Text" ? (<AiTwotoneMessage />) : (<FiVideo />)}{item.type} with {item.title.replace(`${item.type} with `, "")}</span> 
                </span>
              </h3>
              <p className="text-sm text-[#6B7280]">{item.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
