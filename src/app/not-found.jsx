"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      
      <h1 className="text-6xl font-bold text-[#244D3F]">404</h1>

      <h2 className="text-2xl font-semibold text-[#1F2937] mt-4">
        Page Not Found
      </h2>

      <p className="text-[#6B7280] mt-2 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-[#244D3F] text-white rounded-xl font-medium hover:opacity-90 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
};

export default NotFound;