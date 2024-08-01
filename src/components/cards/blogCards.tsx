import type { Article } from "@/types/types";
import Link from 'next/link';

interface BlogCardProps {
  blog: Article;
}
const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img
        alt="ss"
        src={`http://localhost:1337${blog.featureImage.formats.thumbnail.url}`}
        width={blog.featureImage.formats.thumbnail.width}
        height={blog.featureImage.formats.thumbnail.height}
        className="h-56 w-full object-cover"
      />
      <div className="bg-white p-4 sm:p-6">
        <time dateTime="2022-10-10" className="block text-xs text-gray-500">
          {" "}
          {blog.date}{" "}
        </time>

        <Link href={`/blogs/${blog.slug}`}>
          <h3 className="mt-0.5 text-lg text-gray-900">{blog.title}</h3>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {blog.descriptions}
        </p>
      </div>
    </article>
  );
};
export default BlogCard;
