import BlogPost from "../../Components/BlogPost";
import { createClient } from "contentful";

export async function getStaticProps()  {
  const clients = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
  const res = await clients.getEntries({ content_type: "blogauther" });

  return {
    props: {
      blogs: res.items,
    },
  };
}

export default function Home({ blogs }) {
  return (
    <div >
      <h2 className="text-danger mt-3">Recent Blogs</h2>
      {blogs.map((techblog) => {
        return <BlogPost key={techblog.sys.id} techblog={techblog}  />;
      })}
    </div>
  );
}
