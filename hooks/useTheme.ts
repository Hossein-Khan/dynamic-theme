import { useState, useEffect } from "react";
import axios from "axios";

type ThemeConfig = {
  color: string;
  font: string;
};

const useTheme = (themeId: string): ThemeConfig => {
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    color: "",
    font: "",
  });

  useEffect(() => {
    const fetchThemeConfig = async () => {
      try {
        const response = await axios.get("https://testapi.io/api/bobyui/theme");
        let config = response.data;
        console.log(config);
        config = {
          theme: "1",
          themes: {
            "1": {
              color: "red",
              font: "Arial",
            },
            "2": {
              color: "blue",
              font: "Georgia",
            },
          },
        };
        const selectedTheme = config.themes[themeId || config.theme];
        setThemeConfig(selectedTheme);
      } catch (error) {
        console.error("Error fetching theme config:", error);
      }
    };

    fetchThemeConfig();
  }, [themeId]);

  return themeConfig;
};

export default useTheme;
