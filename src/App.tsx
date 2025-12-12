import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import MainPicker from "./components/MainPicker";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Privacy from "./components/pages/Privacy";
import Contact from "./components/pages/Contact";
import Terms from "./components/pages/Terms";

type Page = "home" | "about" | "privacy" | "contact" | "terms";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return <About />;
      case "privacy":
        return <Privacy />;
      case "contact":
        return <Contact />;
      case "terms":
        return <Terms />;
      default:
        return <MainPicker />;
    }
  };

  return (
    <div className="min-h-screen">
      {currentPage !== "home" && (
        <div className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-40">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <button
              onClick={() => setCurrentPage("home")}
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors motion-reduce:transition-none"
            >
              <ArrowLeft size={20} />
              Back to Picker
            </button>
          </div>
        </div>
      )}

      {renderPage()}

      {currentPage === "home" && (
        <Footer onNavigate={(page) => setCurrentPage(page as Page)} />
      )}
    </div>
  );
}

export default App;
