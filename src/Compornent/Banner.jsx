import React from "react";

const Banner = () => {
  return (
    <div className="text-center space-y-6">
      <h1 className=" text-[48px] fond-bold">Friends to keep close in your life</h1>

      <p className="">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the  
        <br />
        relationships that matter most.
      </p>

      <button className="btn bg-[#1f5b43] hover:bg-[gray]">+ Add a Friend</button>
    </div>
  );
};

export default Banner;
