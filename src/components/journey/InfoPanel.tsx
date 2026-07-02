import type { Technology } from "../../types/Technology";

interface Props {
  technology: Technology;
}

function Badge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="rounded-lg bg-slate-800 px-3 py-2">
      {children}
    </span>
  );
}

function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="mb-8">
      <h3 className="mb-3 text-xl font-bold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </section>
  );
}

export default function InfoPanel({
  technology,
}: Props) {
  const Icon = technology.icon;

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-8">

      <div className="mb-8 flex items-center gap-5">

        <div
          className="rounded-2xl p-5"
          style={{
            backgroundColor: technology.color,
          }}
        >
          <Icon
            size={50}
            color="white"
          />
        </div>

        <div>

          <h2 className="text-4xl font-black">
            {technology.name}
          </h2>

          <p className="text-sky-400">
            {technology.category}
          </p>

          <span className="mt-2 inline-block rounded-full bg-sky-500/20 px-3 py-1 text-sm">
            {technology.difficulty}
          </span>

        </div>

      </div>

      <section className="mb-8">
        <h3 className="mb-2 text-xl font-bold">
          Description
        </h3>

        <p className="text-slate-300">
          {technology.description}
        </p>
      </section>

      <section className="mb-8">
        <h3 className="mb-2 text-xl font-bold">
          Why Learn It?
        </h3>

        <p className="text-slate-300">
          {technology.why}
        </p>
      </section>

      <Section
        title="Prerequisites"
        items={
          technology.prerequisites.length
            ? technology.prerequisites
            : ["None"]
        }
      />

      <Section
        title="🟢 Beginner"
        items={technology.beginner}
      />

      <Section
        title="🟡 Intermediate"
        items={technology.intermediate}
      />

      <Section
        title="🔴 Advanced"
        items={technology.advanced}
      />

      <Section
        title="🛠 Tools"
        items={technology.tools}
      />

      <Section
        title="🚀 Beginner Projects"
        items={technology.projects.beginner}
      />

      <Section
        title="🚀 Intermediate Projects"
        items={technology.projects.intermediate}
      />

      <Section
        title="🚀 Advanced Projects"
        items={technology.projects.advanced}
      />

      <Section
        title="➡ Learn Next"
        items={technology.next}
      />

      <Section
        title="💼 Careers"
        items={technology.careers}
      />

      <section>

        <h3 className="mb-3 text-xl font-bold">
          📚 Resources
        </h3>

        <div className="space-y-3">

          {technology.resources.map((resource) => (

            <a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg border border-slate-700 p-3 transition hover:border-sky-400"
            >
              {resource.title}
            </a>

          ))}

        </div>

      </section>

    </div>
  );
}