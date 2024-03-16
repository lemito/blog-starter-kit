import { Post } from "@/interfaces/post";
import { getAllData } from "@/lib/api";


export default async function Index() {
  const data = await getAllData();

  return (
    <main>
      <ul>
        {data.map((data: Post) => (
          <li key={data.id}><a href={`posts/${data.id}`}>{data.id}</a> --- {data.title}</li>
        ))}
      </ul>
    </main>
  );
}
