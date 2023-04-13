import { View } from "@tarojs/components";
import { useRouter } from "@tarojs/taro";
import { useState } from "react";

const AddAnswer = () => {
  const router = useRouter();
  const [questionId] = useState(router.params.questionId);
  return <View>{questionId}</View>;
};

export default AddAnswer;
