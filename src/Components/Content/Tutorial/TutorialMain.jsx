import React, { useState } from "react";
import TabsSection from "./TabsSection";
import Mainpage from "./Mainpage";
import { FeedbackSection } from "./FeedbackSection";

export const TutorialMain = () => {
  const [tab, setTab] = useState("main");
  return (
    <div>
      <TabsSection active={tab} onChange={(a) => setTab(a)} />

      {tab === "main" && (
        <>
          <Mainpage />
          <div>Here we go</div>
        </>
      )}

      {tab === "feedback" && (
        <>
          <FeedbackSection />
        </>
      )}
    </div>
  );
};
