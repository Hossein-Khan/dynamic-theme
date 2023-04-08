import { useState } from "react";
import ThemedComponent from "../components/ThemedComponent";

const Home: React.FC = () => {
  const [themeId, setThemeId] = useState<string>("1");

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setThemeId(event.target.value);
  };

  return (
    <div>
      <h1>Next.js Themed App</h1>
      <label htmlFor="theme-selector">Choose theme:</label>
      <select id="theme-selector" onChange={handleThemeChange} value={themeId}>
        <option value="1">Theme 1</option>
        <option value="2">Theme 2</option>
      </select>
      <ThemedComponent themeId={themeId} />
    </div>
  );
};

export default Home;
