import React from "react";
import "./search-button.css";

type SearchButtonProps = {
    onSearch: (input: string) => void;
    input: string;
    variant?: 'default' | 'alternative';
  };
  
const SearchButton: React.FC<SearchButtonProps> = ({onSearch, input, variant = 'default'}) => {
    
    let buttonClass, textClass;

    if (variant === 'default') {
      buttonClass = "button-default";
      textClass = "text-default";
    } else if (variant === 'alternative') {
      buttonClass = "button-alternative";
      textClass = "text-alternative";
    } else {
      return null;
    }
  
    return (
      <button onClick={() => onSearch(input)} className={buttonClass}>
        <span className={textClass}>
          Search
        </span>
      </button>
    );
}

export default SearchButton;