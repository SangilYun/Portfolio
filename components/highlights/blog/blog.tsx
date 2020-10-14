import HighlightTitle from "../highlighTitle";
import HighlightedText from "components/highlightedText";

import BlogCard from "./blogCard";

export interface blogItem {
  sys: {
    id: string;
  };
  title: string;
  date: string;
  description: any; //TODO: rich text type
}

export interface BlogProps {
  blogPosts: Array<blogItem>;
}

const Blog = ({ blogPosts }: BlogProps) => {
  return (
    <div>
      <HighlightTitle>Highlighted Blog Posts</HighlightTitle>
      {blogPosts.map((blogPost) => {
        return (
          <BlogCard
            key={blogPost.sys.id}
            title={blogPost.title}
            date={blogPost.date}
            description={blogPost.description.json}
          ></BlogCard>
        );
      })}
      <HighlightedText>view all blog post</HighlightedText>
    </div>
  );
};
export default Blog;
