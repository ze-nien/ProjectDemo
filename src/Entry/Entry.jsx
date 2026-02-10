import Entry_Item from "./Entry_Item";
import { posts } from "./data.js";

const Entry = () => {
  return <Entry_Item posts={posts} {...posts} />;
};

export default Entry;
