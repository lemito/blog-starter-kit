import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import { Button } from "@/components/Button";
import { getAllData } from "@/lib/api";

export default async function Index() {
  const data = await getAllData();

  return (
    <main>
      <Header />
      <Button
        className="please-work"
        variant="primary"
      >
        Clicked
      </Button>
      <br></br>
      <PostList data={data} />
      <br></br>
      <Footer />
    </main>
  );
}
