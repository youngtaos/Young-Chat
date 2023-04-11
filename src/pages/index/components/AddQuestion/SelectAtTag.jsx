/* eslint-disable jsx-quotes */
import { useState } from "react";
import { AtTag } from "taro-ui";

const SelectAtTag = ({ item, handleSelectTopic, handleCancelTopics }) => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    if (!isActive) {
      handleSelectTopic(item);
    } else {
      handleCancelTopics(item);
    }
    setIsActive(!isActive);
  };
  return (
    <AtTag type="primary" circle active={isActive} onClick={handleClick}>
      {item.name}
    </AtTag>
  );
};

export default SelectAtTag;
