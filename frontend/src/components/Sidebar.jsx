import React from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  MessageSquare,
  Settings as SettingsIcon,
} from "lucide-react";

export default function Sidebar({
  activePage,
  setActivePage,
  isOpen,
  setIsOpen,
}) {
  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", key: "overview" },
    { icon: CheckSquare, label: "Task", key: "task" },
    { icon: Users, label: "Mentors", key: "mentors" },
    { icon: MessageSquare, label: "Message", key: "message" },
    { icon: SettingsIcon, label: "Settings", key: "settings" },
  ];

  return (
    <div
      className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out
        md:translate-x-0 md:static
      `}
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-200 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
          <img
            src="/logo.png"
            alt="DNX Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-semibold text-gray-900 text-lg">DNX</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.key;
            return (
              <li key={item.key}>
                <button
                  onClick={() => {
                    setActivePage(item.key);
                    setIsOpen(false); // close sidebar on mobile
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition text-left ${
                    isActive
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Help Center */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-900 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-3">
              <span className="text-gray-900 font-bold text-sm">?</span>
            </div>
            <h3 className="font-semibold text-sm mb-1">Help Center</h3>
            <p className="text-xs text-gray-300 mb-3">
              Having Trouble learning.
              <br />
              Please contact us for more questions.
            </p>
            <button className="bg-white text-gray-900 px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors">
              Go To Help Center
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
