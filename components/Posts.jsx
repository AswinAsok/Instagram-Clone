import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "aswinasok",
    userImg:
      "https://d14u0p1qkech25.cloudfront.net/291140541_ec032d98-da31-4999-9055-567e77c2ebed_thumbnail_250x250",
    img: "https://links.papareact.com/3ke",
    caption: "Visit and Follow Aswin Asok",
  },
  {
    id: "123",
    username: "aswinasok",
    userImg:
      "https://d14u0p1qkech25.cloudfront.net/291140541_ec032d98-da31-4999-9055-567e77c2ebed_thumbnail_250x250",
    img: "https://links.papareact.com/3ke",
    caption: "Visit and Follow Aswin Asok",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
