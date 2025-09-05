import React from "react";
import { Search, Filter, ChevronDown, Bell, Menu } from "lucide-react";

const Header = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  setIsSidebarOpen, // ✅ add this
}) => {
  const categories = [
    "",
    "Web Development",
    "3D Design",
    "UI/UX Design",
    "Android Development",
    "iOS Development",
  ];
  const sortOptions = ["Popular", "Newest", "Rating", "Task Count"];

  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex-1 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            {/* ✅ Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <Menu size={24} />
            </button>

            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Explore Mentors
            </h1>
          </div>

          {/* ✅ Filters (responsive: stack on mobile) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search Mentors"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>

            {/* Category */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none cursor-pointer w-full"
              >
                <option value="">All Categories</option>
                {categories.slice(1).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <Filter
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none cursor-pointer w-full"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    Sort By: {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                size={16}
              />
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4 ml-4 sm:ml-6">
          <div className="relative">
            <Bell
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
              size={20}
            />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-300 rounded-full overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
