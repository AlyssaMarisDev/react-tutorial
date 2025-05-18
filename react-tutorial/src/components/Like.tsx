import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({ onClick }: LikeProps) => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
    onClick();
  };

  return (
    <div>
      {liked ? (
        <AiFillHeart color="#ff6b81" size={20} onClick={handleClick} />
      ) : (
        <AiOutlineHeart size={20} onClick={handleClick} />
      )}
    </div>
  );
};

export default Like;
