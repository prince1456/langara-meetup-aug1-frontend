import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

const getData = async (slug: string) => {
  const res = await fetch(
    `http://localhost:1337/api/articles?slug=${slug}&populate=*`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
const Blog = async ({ params: { slug } }: { params: { slug: string } }) => {
  const { data } = await getData(slug);
  const article = data[0];
  console.log({ article });
  const content: BlocksContent = article.Content;

  return (
    <main className=" bg-white">
      <article className="prose lg:prose-xl flex min-h-screen flex-col items-center justify-between pt-24 text-slate-900 container mx-auto max-w-screen-md">
        <h1 className="text-black">{article.title}</h1>
        <img
          className="rounded-xl my-4"
          src={"http://localhost:1337" + article.featureImage.url}
          alt={article.title}
        />
        <BlocksRenderer content={content} />
      </article>
    </main>
  );
};
export default Blog;
