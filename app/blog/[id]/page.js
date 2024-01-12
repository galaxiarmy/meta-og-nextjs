import ButtonWA from "@/compenents/ButtonWA";
import Image from "next/image";

export const getBlogs = async (id) => {

  const response = await fetch(
    `https://api.slingacademy.com/v1/sample-data/photos/${id}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();

  return data.photo;
};

export async function generateMetadata({ params }) {

  const details = await getBlogs(params.id);
  return {
    title: details.title,
    openGraph: {
      title: details.title,
      description: details.description,
      url: `https://meta-og-nextjs.vercel.app/blog/${details.id}`,
      images: [
        {
          url: `${details.url}`, // Must be an absolute URL
          width: 100,
          height: 100,
        },
        {
          url: `${details.url}`, // Must be an absolute URL
          width: 100,
          height: 100,
        },
        {
          url: `${details.url}`, // Must be an absolute URL
          width: 100,
          height: 100,
        },
        {
          url: `${details.url}`, // Must be an absolute URL
          width: 100,
          height: 100,
        },
      ],
    },
  };
}

const BlogDetail = async ({ params }) => {
  const blogs = await getBlogs(params.id);

  return (
    <div style={{ margin: 20 }}>
      <Image alt={blogs.id} src={blogs.url} width={100} height={100} />
      <h1>{blogs.title}</h1>
      <p>{blogs.description}</p>
      <ButtonWA blogs={blogs} />
    </div>
  );
};

export default BlogDetail;
