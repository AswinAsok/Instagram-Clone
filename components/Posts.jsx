import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "aswinasok",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Visit and Follow Aswin Asok",
  },
  {
    id: "123",
    username: "aswinasok",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Visit and Follow Aswin Asok",
  },
  {
    id: "123",
    username: "aswinasok",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Visit and Follow Aswin Asok",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />;
      })}
      <Post />
    </div>
  );
};

export default Posts;
