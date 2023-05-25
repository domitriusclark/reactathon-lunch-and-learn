"use server";
import { getXataClient } from "@/lib/xata.codegen";

export   async function incrementUpvote(postId: string) {
    "use server";
    const xata = getXataClient();

    return await xata.db.Posts.update(postId, {
      upvotes: {
        $increment: 1,
      },
    });
  }