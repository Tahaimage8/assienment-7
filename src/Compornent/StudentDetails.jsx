"use client";


import {  Suspense, useEffect, useState } from "react";
import Card from "./Card";

const StudentDetails = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/friends.json').then(req => req.json()).then((data) => {
        setFriends(data);
        setLoading(false);
      });;
  }, []);

if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg text-[#244D3F]"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="mb-10 lg:border-b lg:border-[#E9E9E9] md:border-b md:border-[#E9E9E9]">
        <div className="gap-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-10">
          <div className="shadow-2xl p-10 text-center">
            <div>{friends.length}</div>
            <div>Total Friends</div>
          </div>

          <div className="shadow-2xl p-10 text-center">
            <div>{friends.filter((f) => f.status === "on-track").length}</div>
            <div>On Track</div>
          </div>

          <div className="shadow-2xl p-10 text-center">
            <div>{friends.filter((f) => f.status === "overdue").length}</div>
            <div>Need Attention</div>
          </div>

          <div className="shadow-2xl p-10 text-center">
            <div>
              {friends.reduce((total, f) => total + f.days_since_contact, 0)}
            </div>
            <div>Interactions This Month</div>
          </div>
        </div>
      </div>

      {/* //---- ------------------------------------*/}

    <div>
        <h2 className="text-[#1F2937] text-[24px] font-semibold">Your Friends</h2> <br />
            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 ">
      {
        friends.map((friend) =><div key={friend.id}> 
        <Suspense fallback='loding.saaaaaaaaaaaaaaaa'>
          <Card  friend={friend} />
        </Suspense>
        </div>)
      }
    </div>
    </div>
    </div>
  );
};

export default StudentDetails;
