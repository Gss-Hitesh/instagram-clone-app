import Post from "./Post";
import { useEffect, useState } from "react";
import { onSnapshot, query, collection, orderBy } from "@firebase/firestore";
import { db } from "../firebase";

function Posts() {
  //variables\\
  const [posts, setPosts] = useState([]);

  //Methods\\
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

  return (
    /* html and css */
    <div>
      {posts.map((element) => (
        <Post
          key={element.id}
          id={element.id}
          username={element.data().username}
          userImg={element.data().profileImg}
          img={element.data().image}
          caption={element.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
