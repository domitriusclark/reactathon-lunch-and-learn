"use client";
import * as React from "react";

export default function UpvoteButton() {
  const [upvotes, setUpvotes] = React.useState<number>(0);
  async function handleUpvote() {}
  return (
    <button className="p-4 text-white rounded-lg bg-slate-700">
      ⬆️ {upvotes}
    </button>
  );
}