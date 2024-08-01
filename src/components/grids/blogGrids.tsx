import BlogCard from "@/components/cards/blogCards";
import type { Article } from "@/types/types";

interface BlogGridsProps {
  articles: Array<Article>;
}
const BlogGrids = ({ articles }: BlogGridsProps) => {
  console.log(articles[0]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {articles.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};
export default BlogGrids;
