import { Search } from "lucide-react";

const SearchBar = ({ filters, setSearch }) => {
  return (
    <div
      className="group flex-1 flex items-stretch relative py-1 px-2 gap-1 border border-solid border-slate-700/30 rounded-3xl focus-within:outline focus-within:outline-2 
             focus-within:outline-offset-1 focus-within:outline-indigo-500 focus-within:border-transparent"
    >
      <input
        type="text"
        name="search"
        value={filters.search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search projects..."
        className="py-0.5 px-2 w-full bg-transparent flex-1 text-ellipsis border-none focus:outline-none text-slate-900 placeholder:text-slate-500"
      />
      <Search
        className="text-slate-600 group-focus-within:text-indigo-500 "
        size={20}
      />
    </div>
  );
};
export default SearchBar;
