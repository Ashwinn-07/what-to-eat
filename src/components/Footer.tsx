interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <button
            onClick={() => onNavigate("about")}
            className="hover:text-white transition-colors"
          >
            About
          </button>
          <button
            onClick={() => onNavigate("privacy")}
            className="hover:text-white transition-colors"
          >
            Privacy
          </button>
          <button
            onClick={() => onNavigate("contact")}
            className="hover:text-white transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => onNavigate("terms")}
            className="hover:text-white transition-colors"
          >
            Terms
          </button>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>&copy; 2025 What To Eat? All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
