import { useDarkModeContext } from "../contexts/DarkModeContext";
import DarkModeToggle from "react-dark-mode-toggle";


export default function DarkModeBtn() {
    const {isDarkMode, setIsDarkMode} = useDarkModeContext();
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={60}
    />
  );
}

