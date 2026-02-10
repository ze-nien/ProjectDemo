import Entry_Img from "./Entry_Img.jsx";
import Entry_Content from "./Entry_Content.jsx";

const Entry_Item = ({ posts }) => {
  console.log(posts);
  return (
    <article className="Entry-container">
      {posts.map((item) => (
        <div key={item.id} className="Entry-card">
          <Entry_Img img={item.imgURL} />
          <Entry_Content
            location={item.location}
            title={item.title}
            secTitle={item.sectitle}
            content={item.content}
          />
        </div>
      ))}
    </article>
  );
};

export default Entry_Item;
