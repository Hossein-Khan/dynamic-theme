import React from "react";
import useTheme from "../hooks/useTheme";

type ThemedComponentProps = {
  themeId: string;
};

const ThemedComponent: React.FC<ThemedComponentProps> = ({ themeId }) => {
  const themeConfig = useTheme(themeId);

  const styles = {
    color: themeConfig.color,
    fontFamily: themeConfig.font,
  };

  return (
    <div style={styles}>
      This is a themed component with color: {themeConfig.color} and font:{" "}
      {themeConfig.font}.
    </div>
  );
};

export default ThemedComponent;
