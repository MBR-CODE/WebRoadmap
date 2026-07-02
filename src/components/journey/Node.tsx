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
          ? "border-red-500 bg-red-600/15 shadow-lg shadow-red-500/20"
          : "border-zinc-800 bg-zinc-950 hover:-translate-y-1 hover:border-red-500 hover:bg-red-600/5 hover:bg-red-600/10"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <Icon
          size={42}
          color={active ? "#ef4444" : "#94a3b8"}
        />

        <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs">
          Explore
        </span>
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        Click to view roadmap
      </p>
    </button>
  );
}