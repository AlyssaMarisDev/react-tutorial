import { useState } from "react";

interface ExpandableTextProps {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 100 }: ExpandableTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div>{isExpanded ? children : children.slice(0, maxLength) + "..."}</div>
      {children.length > maxLength && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Less" : "More"}
        </button>
      )}
    </>
  );
};

export default ExpandableText;
