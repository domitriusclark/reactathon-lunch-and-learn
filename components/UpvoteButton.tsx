"use client";
import * as React from "react";
import { incrementUpvote } from "@/actions";

type Props = {
    upvote: number;  
    postId: string;
}

export default function UpvoteButton({  postId,  upvote }: Props) {  
  const [upvotes, setUpvotes] = React.useState<number>(upvote);

  async function handleUpvote() {
    await incrementUpvote(postId);
    setUpvotes(upvotes + 1);
  }

  return (
    <button className="p-4 text-white rounded-lg bg-slate-700" onClick={() => handleUpvote()}>
      ⬆️ {upvotes}
    </button>
  );
}