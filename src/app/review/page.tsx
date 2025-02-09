"use client";

import { useRouter, useSearchParams } from "next/navigation";
import NavBar from "@/components/NavBar";
import LandingPage from "@/components/LandingPage";
import { useEffect, useState } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [showReviewMessage, setShowReviewMessage] = useState(false);

  //   useEffect(() => {
  //     if (searchParams.get("review") === "true") {
  //       setShowReviewMessage(true);

  //       setTimeout(() => setShowReviewMessage(false), 5000);
  //     }
  //   }, [searchParams]);

  return (
    <div>
      <NavBar />
      {showReviewMessage && (
        <div className="bg-yellow-500 text-white text-center py-3">
          Your account is under review. We will email you soon.
        </div>
      )}
      <LandingPage />
    </div>
  );
}
