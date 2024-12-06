import React from "react";
import Button from "../../Button/Button";

const TabsSection = ({ active, onChange }) => {
  return (
    <>
      <Button isActive={active === "main"} onTouch={() => onChange("main")}>
        Main
      </Button>
      <Button
        isActive={active === "feedback"}
        onTouch={() => onChange("feedback")}
      >
        Feedback
      </Button>
    </>
  );
};

export default TabsSection;
