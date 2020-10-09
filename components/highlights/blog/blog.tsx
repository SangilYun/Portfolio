import HighlightTitle from "../highlighTitle";
import HighlightedText from "components/highlightedText";

import BlogCard from "./blogCard";

const Blog = () => (
  <div>
    <HighlightTitle>Highlighted Blog Posts</HighlightTitle>
    <BlogCard />
    <BlogCard />
    <BlogCard />
    <HighlightedText>view all blog post</HighlightedText>
  </div>
);
export default Blog;
