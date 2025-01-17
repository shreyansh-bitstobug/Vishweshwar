// BlogPost.js
import React from "react";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Share2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { blogs } from "@/app/lib/blog";
import Image from "next/image";
import Link from "next/link";
import ShareButton from "./ShareButton"; // We'll create this component separately

// Main BlogPost component remains a Server Component
const BlogPost = async ({ params }) => {
  const { id } = params;
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/your-background-image.jpg')" }}
      >
        <div className="bg-white/90 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Link href="/Blog">
            <Button variant="outline" className="flex items-center gap-2">
              <ChevronLeft size={16} />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/blog-bg2.jpg')",
      }}
    >
      <div className="bg-black/50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20 text-white">
          <div className="mb-8 bg-white/90 p-8 rounded-lg shadow-lg text-gray-800">
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <Link href="/Blog">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ChevronLeft size={16} />
                  Back to Blog
                </Button>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 w-full">
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <Avatar className="h-10 w-10 md:h-12 md:w-12 flex-shrink-0">
                  <AvatarImage src={blog.author?.avatar} />
                  <AvatarFallback>
                    {blog.author?.name?.charAt(0) || "A"}
                  </AvatarFallback>
                </Avatar>

                <div className="flex flex-col min-w-0">
                  <p className="font-semibold text-gray-900 truncate">
                    {blog.author?.name || "Anonymous"}
                  </p>
                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <Calendar size={14} className="flex-shrink-0" />
                      <span className="truncate">{blog.date || "No date"}</span>
                    </span>
                    <span className="hidden lg:flex items-center gap-1 whitespace-nowrap">
                      <Clock size={14} className="flex-shrink-0" />
                      <span className="truncate">
                        {blog.readTime || "5 min read"}
                      </span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full sm:w-auto sm:ml-auto mt-4 sm:mt-0">
                <ShareButton />
              </div>
            </div>

            {blog.tags && (
              <div className="flex gap-2 top-4 left-4 z-20">
                {blog.tags.split(",").map((tag, index) => (
                  <p className="bg-black rounded-[10px] text-gray-200 text-sm font-semibold px-3" key={index}>
                    {tag}
                  </p>
                ))}
              </div>
            )}

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {blog.title}
            </h1>
            <Image
              src={blog.image}
              alt={blog.title}
              className="rounded-lg"
              width={1000}
              height={1000}
            />
          </div>

          <Card className="shadow-lg">
            <CardContent className="p-8 bg-white/90 text-gray-800">
              <p className="text-xl leading-relaxed mb-8">{blog.description}</p>

              {blog.subheaders?.map((subheader, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl lg:text-3xl font-bold mb-4">{subheader.title}</h2>
                </div>
              ))}

              {blog.paragraphs?.map((paragraph, index) => (
                <div key={index} className="mb-6">
                  <p className="text-lg leading-relaxed">
                    {paragraph.text}
                    {paragraph.buttonText && (
                      <Button
                        variant="link"
                        id={paragraph.buttonId}
                        className="px-2 h-auto"
                      >
                        {paragraph.buttonText}
                      </Button>
                    )}
                    {paragraph.link && (
                      <a
                        href={paragraph.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline ml-1"
                      >
                        {paragraph.link.text}
                      </a>
                    )}
                  </p>
                </div>
              ))}

              {blog.content && (
                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <ul className="space-y-4">
                    {blog.content.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
                        <span>
                          {item.text}
                          {item.buttonText && (
                            <Button
                              variant="link"
                              id={item.buttonId}
                              className="px-2 h-auto"
                            >
                              {item.buttonText}
                            </Button>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }));
}

export default BlogPost;