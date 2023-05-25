import { PostsRecord } from "@/lib/xata.codegen";

import UpvoteButton from "./UpvoteButton";

type Props = {
  post: PostsRecord;
  key: string;
};

export default function Post({ post, key }: Props) {
  return (
    <article
      key={key}
      className="w-full p-4 text-white border-2 rounded-lg border-slate-300 "
    >
      <h1 className="text-xl">{post.title}</h1>
      <p className="text-md">{post.text}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {post.tags?.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-sm text-white rounded-lg bg-slate-700"
          >
            {tag}
          </span>
        ))}
        <UpvoteButton />
      </div>
    </article>
  );
}
