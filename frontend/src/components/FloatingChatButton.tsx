import { MessageCircle } from "lucide-react";

const FloatingChatButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="Open chat"
    >
      <MessageCircle className="w-6 h-6 text-white" strokeWidth={1.5} />
    </button>
  );
};

export default FloatingChatButton;