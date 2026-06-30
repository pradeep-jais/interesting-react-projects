const FilterTags = ({ allTags, toggleTags, filters }) => {
  return (
    <div className="w-[65%] md:w-[75%] overflow-x-scroll no-scrollbar">
      <ul className=" flex gap-2 p-2 ">
        {allTags.map((tag) => {
          return (
            <li key={tag}>
              <button
                onClick={() => toggleTags(tag)}
                className={`border border-solid py-1 px-2 capitalize rounded-md hover:bg-slate-50 hover:border-slate-500/30  cursor-pointer 
                  ${filters.tags.includes(tag) ? "bg-blue-50 text-blue-900 border-blue-500/30" : "bg-transparent border-transparent"}
                  `}
              >
                {tag}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FilterTags;
