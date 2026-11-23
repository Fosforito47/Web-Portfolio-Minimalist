import Projects from "./components/Pages/Projects";
import SideBar from "./components/UI/SideBar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <SideBar />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <Projects />
      </main>
    </div>
  );
}

export default App;
