import { useEffect, useState } from "react";
import { ListOfTweets, Navigation, User } from "../components";
import axios from "axios";

export function Profile() {
  const [tweets, setTweets] = useState([]);

  // function to get tweets from the backend, get the tweets owned by the curretn user
  const getTweets = async () => {
    // endpoint for getting tweets from the backend
    const url = `${process.env.REACT_APP_BACKEND_URL}/tweets/owned`;
    // request config that is gonna hold the authorization
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };
    // make the request
    const result = await axios.get(url, config);
    setTweets(result.data);
  };

  useEffect(() => {
    getTweets();
  }, []);
  return (
    <div className="container">
      <Navigation />
      {/* user component to show info about the user */}
      <User />
      {/* list of tweets owned by a user */}
      <ListOfTweets tweets={tweets} />
    </div>
  );
}
