import BlogGrids from "@/components/grids/blogGrids";
import Hero from "@/components/hero/hero";
async function getData() {
  const res = await fetch("http://localhost:1337/api/articles?populate=*");
  const homePage = await fetch("http://localhost:1337/api/home-page?populate=*");
  if (!res.ok) {
    console.log({ res });
    throw new Error("Failed to fetch data");
  }
  const data = { 
    blogs: await res.json(),
    homePage: await homePage.json()
  }
  return data
}

export default async function Home() {
  const { blogs, homePage } = await getData();
 
  const heroData = homePage.data.dynamic.find((item: any) => item.__component === 'hero.hero');
  
  return (
    <main className=" bg-white">
      <Hero text={heroData.text} subText={heroData.subText}/>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <BlogGrids articles={blogs.data} />
      </div>
    </main>
  );
}
