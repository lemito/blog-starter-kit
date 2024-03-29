import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import UIKitDemo from "@/components/UIKitDemo";
import { getAllData } from "@/lib/api";

export default async function Index() {
  const data = await getAllData();

  return (
    <main>
      <Header />
      <UIKitDemo />
      <br></br>
      <PostList data={data} />
      <br></br>
      <Footer />
    </main>
  );
}
