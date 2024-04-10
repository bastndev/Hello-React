import { useState } from "react";

export function Hook() {
  const [likes, setLikes] = useState(0);

  return (
    <div className="flex flex-col">
      <h1>Likes {likes}</h1>
      <button
        onClick={() => setLikes(likes + 1)}
        className="bg-green-500  hover:bg-orange-700"
      >
        Give Like +
      </button>
      <br />
      <button
        onClick={() => setLikes(likes - 1)}
        className="bg-green-500  hover:bg-orange-700"
      >
        Remove Like -
      </button>
    </div>
  );
}
