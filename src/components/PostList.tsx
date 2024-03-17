import { Post } from "@/interfaces/post";


async function PostList({data} : {data: Post[]}) {
  return (
    <div>
      <ul>
        {data.map((data: Post) => (
          <li key={data.id}>
            <a href={`posts/${data.id}`}>{data.id}</a> --- {data.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList