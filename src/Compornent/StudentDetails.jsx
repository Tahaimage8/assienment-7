import { use } from "react";
import Card from "./Card";

const getFriends = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  return res.json();
};

const StudentDetails = () => {
  const friends = use(getFriends());

  console.log(friends);
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
        friends.map((friend) => <Card key={friend.id} friend={friend} />)
      }
    </div>
    </div>
    </div>
  );
};

export default StudentDetails;
