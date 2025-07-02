import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const InfiniteScrollingDemo = () => {
  const [items, setItems] = useState([]); // To hold the fetched items
  const [hasMore, setHasMore] = useState(true); // Flag to indicate more items to load

  // Function to fetch data from JSONPlaceholder API
  const fetchMoreData = () => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => {
          // Adding the fetched data to existing items
          setItems((prevItems) => [...prevItems, ...data]);

          // Check if we have more data to load, based on the current data length
          if (data.length === 0) {
            setHasMore(false); // Stop fetching more data after a certain point
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setHasMore(false); // Stop fetching if there's an error
        });
    }, 1500);
  };

  useEffect(() => {
    fetchMoreData(); // Initial data load
  }, []);

  return (
    <div>
      <h1>Demo: react-infinite-scroll-component</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length} // Length of current data
        next={fetchMoreData} // Function to load more data
        hasMore={hasMore} // If there are more items to load
        loader={<h4>Loading...</h4>} // Loader component
      >
        {items.map((item : any, index) => (
          <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }} key={index}>
            <h3>{item.name}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollingDemo;
