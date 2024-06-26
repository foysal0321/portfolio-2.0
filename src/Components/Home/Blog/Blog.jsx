//import { Link } from "react-router-dom";
import { blogData } from "./BlogData";

function Blog() {
  return (
    <div id="Blog" className="py-10">
      <div className="md:p-14 p-6">
        <h1 className="text-4xl font-semibold">Blog</h1>

        <div className="mt-8 py-2">
          {blogData.map((blog, i) => (
            <div key={i} className="collapse collapse-arrow bg-base-200 my-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                {blog.name}
              </div>
              <div className="collapse-content">
                <a href="#">See More</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
