import { useState } from "react";
import MeCollecting from "./components/MeCollecting";
import MeInfo from "./components/MeInfo";
import { login } from "./utils";
import Login from "./components/Login";

const Index = () => {
  const [userId, setUserId] = useState("");
  return (
    <>
      {userId ? (
        <MeInfo userId={userId}></MeInfo>
      ) : (
        <Login setUserId={setUserId} userId={userId} />
      )}
      <MeCollecting userId={userId} />
    </>
  );
};

export default Index;
