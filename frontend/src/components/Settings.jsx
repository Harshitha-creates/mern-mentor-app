import React, { useState } from "react";

export default function Settings() {
  const [tab, setTab] = useState("general");

  const [language, setLanguage] = useState("English (Default)");
  const [timezone, setTimezone] = useState("UTC+05:30 (IST)");
  const [timeFormat, setTimeFormat] = useState("24");

  const [notifications, setNotifications] = useState({
    message: true,
    taskUpdate: false,
    taskDeadline: true,
    mentorHelp: false,
  });

  const handleSave = () => {
    const payload =
      tab === "general"
        ? { language, timezone, timeFormat }
        : { notifications };
    console.log("Save settings payload:", payload);
    // replace with real save (API) if needed
    alert("Settings saved");
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-semibold mb-6">Settings</h2>

        {/* Tabs */}
        <div className="flex items-center border-b mb-6">
          <button
            onClick={() => setTab("general")}
            className={`px-4 py-3 -mb-px ${
              tab === "general"
                ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            General
          </button>
          <button
            onClick={() => setTab("notification")}
            className={`px-4 py-3 -mb-px ${
              tab === "notification"
                ? "text-blue-600 border-b-2 border-blue-600 font-medium"
                : "text-gray-500"
            }`}
          >
            Notification
          </button>
        </div>

        {/* Content */}
        {tab === "general" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option>English (Default)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Timezone
              </label>
              <select
                value={timezone}
                onChange={(e) => setTimezone(e.target.value)}
                className="w-full border rounded-lg p-3"
              >
                <option>UTC+00:00 (GMT)</option>
                <option>UTC+05:30 (IST)</option>
                <option>UTC-05:00 (EST)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Format
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setTimeFormat("24")}
                  className={`px-4 py-2 rounded-lg border ${
                    timeFormat === "24"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  24 Hours
                </button>
                <button
                  onClick={() => setTimeFormat("12")}
                  className={`px-4 py-2 rounded-lg border ${
                    timeFormat === "12"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  12 Hours
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === "notification" && (
          <div className="space-y-4">
            {Object.entries(notifications).map(([key, val]) => (
              <div key={key} className="flex items-center justify-between">
                <div className="text-gray-700 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={() =>
                      setNotifications((prev) => ({
                        ...prev,
                        [key]: !prev[key],
                      }))
                    }
                    className="sr-only"
                  />
                  <div
                    className={`w-11 h-6 rounded-full transition-colors ${
                      val ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                  <span
                    className={`absolute left-1 top-0.5 w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                      val ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </label>
              </div>
            ))}
          </div>
        )}

        {/* Save */}
        <div className="mt-8">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
