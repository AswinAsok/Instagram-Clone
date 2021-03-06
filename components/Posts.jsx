import { useState, useEffect } from "react";

import Post from "./Post";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "@firebase/firestore";

const posts = [
  {
    id: "123",
    username: "aswinasok",
    userImg:
      "https://d14u0p1qkech25.cloudfront.net/291140541_ec032d98-da31-4999-9055-567e77c2ebed_thumbnail_250x250",
    img: "https://images.unsplash.com/photo-1563570971183-88011da1e470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80",
    caption: "Visit and Follow Aswin Asok",
  },
  {
    id: "123",
    username: "aswinasok",
    userImg:
      "https://d14u0p1qkech25.cloudfront.net/291140541_ec032d98-da31-4999-9055-567e77c2ebed_thumbnail_250x250",
    img: "https://images.unsplash.com/photo-1563468426843-8d6107699d10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    caption: "Visit and Follow Aswin Asok",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(posts);

  return (
    <div>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            caption={post.data().caption}
          />
        );
      })}
    </div>
  );
};

export default Posts;
