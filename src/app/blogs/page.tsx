import BlogGrids from "@/components/grids/blogGrids";
async function getData() {
    const res = await fetch("http://localhost:1337/api/articles?populate=*");
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      console.log({ res });
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
  
    return res.json();
  }
const ArticlesPage = async () => {
    const { data } = await getData();
  return (
    <main className=" bg-white text-black">
      <div className="flex min-h-screen flex-col items-center py-24">
        <h1 className="text-2xl my-10">Welcome to latest blog page</h1>
        <BlogGrids articles={data} />
      </div>
    </main>
  );
};
export default ArticlesPage;
