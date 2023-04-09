import QuestionDetail from "./QuestionDetail";
import { useRouter } from "@tarojs/taro";
import { useState } from "react";
import AnswerList from "./AnswerList";

const DetailPage = () => {
  const router = useRouter();
  const [questionId] = useState(router.params.questionId);

  return (
    <>
      <QuestionDetail questionId={questionId} />
      <AnswerList questionId={questionId} />
    </>
  );
};

export default DetailPage;
