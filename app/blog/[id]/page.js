import Head from "next/head";
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
      url: `https://bakulbrambang/project-detail/${details.id}`,
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
      <Head>
        <title>{blogs.title}</title>

        <meta property="og:title" content={blogs.title} />
        <meta property="og:description" content={blogs.description} />
        <meta property="og:image" content={blogs.url} />
        <meta property="og:url" content={`http://test123/blog/${blogs.id}`} />
      </Head>
      <Image alt={blogs.id} src={blogs.url} width={100} height={100} />
      <h1>{blogs.title}</h1>
      <p>{blogs.description}</p>
    </div>
  );
};

export default BlogDetail;
