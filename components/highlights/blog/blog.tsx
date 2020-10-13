import HighlightTitle from "../highlighTitle";
import HighlightedText from "components/highlightedText";

import BlogCard from "./blogCard";

//TODO: add types
const Blog = ({ blogPosts }) => {
  console.log("blogPosts", blogPosts);
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
