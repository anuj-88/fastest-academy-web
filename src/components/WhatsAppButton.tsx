
import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/+919843322001" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
