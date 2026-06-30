import { Link } from "react-router-dom";

const ProjectLinkCard = ({ path, name, description, tags }) => {
  return (
    <Link
      to={path}
      className="block h-full bg-slate-100 p-5 rounded-md shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
    >
      <h3 className="text-lg text-slate-900 font-semibold capitalize mb-1">
        {name}
      </h3>
      <p className="text-sm text-slate-700 mb-4">{description}</p>
      <div className="flex gap-2.5">
        {tags.map((tag, i) => {
          return (
            <span
              key={i}
              className="text-sm text-slate-700 py-0.5 px-4 bg-slate-50 shadow-sm rounded-lg"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </Link>
  );
};
export default ProjectLinkCard;
