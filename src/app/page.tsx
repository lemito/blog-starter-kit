import Container from "@/components/container";
// import { HeroPost } from "@/components/hero-post";
// import { Intro } from "@/components/intro";
// import { MoreStories } from "@/components/more-stories";
import { getAllPosts } from "@/lib/api";
import dynamic from "next/dynamic";

const HeroPost = dynamic(
  () => import("@/components/hero-post").then((mod) => mod.HeroPost),
  {
    loading: () => <p>Loading...</p>,
  }
);
const Intro = dynamic(
  () => import("@/components/intro").then((mod) => mod.Intro),
  {
    loading: () => <p>Loading...</p>,
  }
);
const MoreStories = dynamic(
  () => import("@/components/more-stories").then((mod) => mod.MoreStories),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
// import Footer from "@/components/Footer";
// import Header from "@/components/Header";
// import PostList from "@/components/PostList";
// import UIKitDemo from "@/components/UIKitDemo";
// import { getAllData } from "@/lib/api";

// export default async function Index() {
//   const data = await getAllData();

//   return (
//     <main>
//       <Header />
//       <UIKitDemo />
//       <br></br>
//       <PostList data={data} />
//       <br></br>
//       <Footer />
//     </main>
//   );
// }
