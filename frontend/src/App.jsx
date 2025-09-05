import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RecentMentors from "./components/RecentMentors";
import MentorsGrid from "./components/MentorsGrid";
import Settings from "./components/Settings";
import { mentorService } from "./services/mentorService";

export default function App() {
  const [mentors, setMentors] = useState([]);
  const [recentMentors, setRecentMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("Popular");
  const [loading, setLoading] = useState(true);

  // navigation state
  const [activePage, setActivePage] = useState("mentors");

  // ✅ Sidebar toggle for mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (activePage === "mentors") {
      loadMentors();
    }
  }, [activePage]);

  const loadMentors = async () => {
    try {
      setLoading(true);
      const data = await mentorService.getAllMentors();
      setMentors(data.mentors || data);
      setRecentMentors(
        data.recentMentors || (data.mentors ? data.mentors.slice(0, 4) : [])
      );
    } catch (error) {
      console.error("Error loading mentors:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFollowToggle = async (mentorId) => {
    try {
      const updatedMentor = await mentorService.toggleFollow(mentorId);
      setMentors((prev) =>
        prev.map((mentor) =>
          (mentor.id || mentor._id) ===
          (mentorId || updatedMentor.id || updatedMentor._id)
            ? { ...mentor, isFollowed: updatedMentor.isFollowed }
            : mentor
        )
      );
      setRecentMentors((prev) =>
        prev.map((mentor) =>
          (mentor.id || mentor._id) ===
          (mentorId || updatedMentor.id || updatedMentor._id)
            ? { ...mentor, isFollowed: updatedMentor.isFollowed }
            : mentor
        )
      );
    } catch (error) {
      console.error("Error toggling follow:", error);
    }
  };

  const filteredMentors = mentors.filter((mentor) => {
    const name = (mentor.name || "").toLowerCase();
    const title = (mentor.title || "").toLowerCase();
    const term = searchTerm.toLowerCase();
    const matchesSearch = name.includes(term) || title.includes(term);
    const matchesCategory =
      !selectedCategory || mentor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* ✅ Sidebar (mobile + desktop) */}
      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setIsSidebarOpen={setIsSidebarOpen} // ✅ pass toggle
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          {activePage === "mentors" && (
            <>
              <RecentMentors
                mentors={recentMentors}
                onFollowToggle={handleFollowToggle}
                loading={loading}
              />
              <MentorsGrid
                mentors={filteredMentors}
                onFollowToggle={handleFollowToggle}
                loading={loading}
              />
            </>
          )}

          {activePage === "settings" && <Settings />}

          {activePage === "overview" && (
            <div className="text-gray-700">Overview page (placeholder)</div>
          )}
          {activePage === "task" && (
            <div className="text-gray-700">Task page (placeholder)</div>
          )}
          {activePage === "message" && (
            <div className="text-gray-700">Message page (placeholder)</div>
          )}
        </main>
      </div>
    </div>
  );
}
