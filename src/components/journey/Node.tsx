import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  title: string;
  active: boolean;
  onClick: () => void;
}

export default function Node({
  icon: Icon,
  title,
  active,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`group w-56 rounded-2xl border p-5 text-left transition-all duration-300

      ${
        active
          ? "border-sky-400 bg-sky-500/15 shadow-lg shadow-sky-500/20"
          : "border-slate-700 bg-slate-900 hover:-translate-y-1 hover:border-sky-400"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <Icon
          size={42}
          color={active ? "#38bdf8" : "#94a3b8"}
        />

        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs">
          Explore
        </span>
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        Click to view roadmap
      </p>
    </button>
  );
}