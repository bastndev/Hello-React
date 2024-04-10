//TODO: First Option

/* import { useState } from "react";

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
 */

/* // TODO: 2 Second option
import { useState } from "react";

export function Hook() {
  const [likes, setLikes] = useState(0);

  const giveLike = () => {
    setLikes(likes + 1);
  };
  const removeLike = () => {
    setLikes(likes - 1);
  };
  return (
    <div className="flex flex-col">
      <h1>Likes {likes}</h1>
      <button onClick={giveLike} className="bg-green-500  hover:bg-orange-700">
        Give Like +
      </button>
      <br />
      <button onClick={removeLike} className="bg-green-500 ">
        Remove Like -
      </button>
    </div>
  );
} */

// TODO: 3 There option
import { useState } from "react";

export function Hook() {
  const [theme, setTheme] = useState(false);

  const swapTheme = () => {
    setTheme(true);
    console.log(theme)
  };
  return (
    <div className="flex flex-col">
      <h1>Theme {theme}</h1>
      <button onClick={swapTheme} className="bg-green-500 ">
        Swap Theme
      </button>
    </div>
  );
}

// Optional
/* import { useState, useEffect } from "react";

export function Hook() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  const swapTheme = () => {
    setTheme(true);
  };

  return (
    <div className="flex flex-col">
      <h1>Theme {theme}</h1>
      <button onClick={swapTheme} className="bg-green-500 ">
        Swap Theme
      </button>
    </div>
  );
} */