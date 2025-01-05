import BlogDetailsHome from "@/components/blogs/blog-details";

interface param {
  id: string;
}

async function extractBlogDetails(id: string) {
  const res = await fetch(
    `${process.env.URL}/api/blog-post/blog-details?blogID=${id}`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (data.success) return data.data;
}

export default async function BlogDetails({ params }: { params: param }) {
  const { id } = await params;
  const blogData = await extractBlogDetails(id);

  return <BlogDetailsHome blogData={blogData} />;
}
