import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error", error);
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner></Spinner>
      ) : posts.length > 0 ? (
        <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl w-11/12 mx-auto gap-y-10 gap-x-5">
          {posts.map((post) => (
            <Product key={post.id} post={post}></Product>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">No Post Found</div>
      )}
    </div>
  );
}

export default Home;
