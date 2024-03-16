import { getDataById } from "@/lib/api";

export default async function PostById({ params }: { params: { slug: string } }) {

  const data = await getDataById(params.slug);

  return (
    <main>
        <strong  className="my_title">{ data.title }</strong>
        <p className="my_body">{ data.body }</p>
        <div className="my_body_html" dangerouslySetInnerHTML={{ __html: data.body }}></div>
    </main >
  );
}
