"use client";

import Banner from "@/Compornent/Banner";
import StudentDetails from "@/Compornent/StudentDetails";


export default function Home() {
  return (
  <div className="max-w-7xl mx-auto">
    <div className="mt-6 p-5">
      <Banner/>
      <StudentDetails/>
    </div>
  </div>
  );
}
