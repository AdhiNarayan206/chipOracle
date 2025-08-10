import { Square, Circle, Triangle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
        <div className="flex items-center gap-2 text-gray-400">
            <Square size={16} strokeWidth={1.5} />
            <Circle size={16} strokeWidth={1.5} />
            <Triangle size={16} strokeWidth={1.5} />
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-24">
          <div>
            <h4 className="font-bold mb-4 text-sm text-primary">About</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Team</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Privacy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm text-primary">Contact</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Support</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Email</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};