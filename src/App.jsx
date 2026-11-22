import { Button } from "./components/UI/Button";
import { Chip } from "./components/UI/Chips";
import SideBar from "./components/UI/SideBar";
import { Github } from "lucide-react";

function App() {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col  gap-3">
        <Button text="Send it" LeadingIcon={Github} />
        <Button iconOnly Icon={Github} />
        <Button text="Send it" variant="secondary" />
        <Button text="Send it" variant="ghost" />
      </div>
    </div>
  );
}

export default App;
