"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import { Button } from "@/components/Button";
import { getAllData } from "@/lib/api";

export default async function Index() {
  const data = await getAllData();

  function meow(_event: any): void {
    alert("Clicked!");
  }

  return (
    <main>
      <Header />
      <Button onClick={meow} className="please-work" variant="primary">
        Clicked
      </Button>
      <br></br>
      <PostList data={data} />
      <br></br>
      <Footer />
    </main>
  );
}
