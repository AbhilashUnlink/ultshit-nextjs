import { HEADINGS } from '@/constants/categories.c';
import Image from 'next/image';
import { use } from 'react';

// Type definitions
type BlogAuthor = {
    name: string;
    username: string;
    profile_image?: string;
    profile_image_90?: string;
};

type BlogPost = {
    id: number;
    title: string;
    description: string;
    url: string;
    social_image: string;
    published_at: string;
    reading_time_minutes: number;
    tag_list: string[];
    user: BlogAuthor;
};

const fetchTechBlogs = async (tag: string): Promise<BlogPost[]> => {
    const res = await fetch(`https://dev.to/api/articles?tag=${tag}&top=5`);
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
};

const DevToBlogList = ({ tag = "technology" }: { tag: "technology" | "creativity" | "finance" | "travel" | "lifestyle" | "food" |"fitness" }) => {
    const blogs = use(fetchTechBlogs(tag));

    return (
        <div className="max-w-6xl mx-auto px-4 py-12 pt-28">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {HEADINGS[tag].title}
                </h1>
                <p className="text-lg text-gray-600">
                    {HEADINGS[tag].subTitle}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                    <article
                        key={blog.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                        {blog.social_image && (
                            <div className="h-48 overflow-hidden">
                                <Image
                                    width={100}
                                    height={100}
                                    src={blog.social_image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        )}

                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3">
                                    {blog.user.profile_image_90 && (
                                        <Image
                                            width={100}
                                            height={100}
                                            src={blog.user.profile_image_90}
                                            alt={blog.user.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                    )}
                                    <span className="text-sm font-medium text-gray-700">
                                        {blog.user.name}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                                    <a
                                        href={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-blue-600 transition-colors"
                                    >
                                        {blog.title}
                                    </a>
                                </h2>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {blog.description}
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                                    <span>
                                        {new Date(blog.published_at).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}
                                    </span>
                                    <span>{blog.reading_time_minutes} min read</span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {blog.tag_list.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default DevToBlogList;