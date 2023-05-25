"use client";
import useOptimistic from "@/hooks/useOptimistic";

type Props = {
  upvote: number;

};

export default async function UpvoteButton({    
  upvote,
}: Props) {
  const [optimisticUpvote, addOptimisticUpvote] = useOptimistic(
    { upvotes: upvote, pending: false },
    function upvoteReducer(_, newState: { upvotes: number; pending: boolean }) {
      return newState;
    }
  );

  async function upvotePost() {
    addOptimisticUpvote({
      upvotes: optimisticUpvote.upvotes + 1,
      pending: true,
    });    
  }

  return (
    <button
      className="p-4 text-white rounded-lg bg-slate-700"
      onClick={() => upvotePost()}      
    >
      ⬆️ {optimisticUpvote.upvotes}
    </button>
  );
}
