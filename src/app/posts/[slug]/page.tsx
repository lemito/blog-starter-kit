'use client'

import { Post } from "@/interfaces/post";
import { getDataById } from "@/lib/api";
import { useSearchParams } from "next/navigation";

export default async function PostById({ params }: { params: { slug: string } }) {

  const data = await getDataById(params.slug);

  return (
    <main>
        <p>{ data.id } --- { data.title }</p>
    </main >
  );
}
