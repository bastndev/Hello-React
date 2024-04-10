import { useState, useEffect } from "react";

export function Likes() {
  const [likes, setLikes] = useState(0);

  const giveLike = () => {
    setLikes(likes + 1);
  };

  useEffect(giveLike, []); //[] loop infinite precaution or caution | escucha que cambio
  return (
    <div className="flex flex-col">
      <h2>Number of likes: {likes}</h2>
      <button onClick={giveLike}>Like +</button>
    </div>
  );
}
