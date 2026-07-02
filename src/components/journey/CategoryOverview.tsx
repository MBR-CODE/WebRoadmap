import type { CategoryInfo } from "../../types/CategoryInfo";
import type { Technology } from "../../types/Technology";

interface Props {
  info: CategoryInfo;
  technologies: Technology[];
  onSelectTechnology: (technology: Technology) => void;
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-8 rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <h3 className="mb-4 text-2xl font-bold">{title}</h3>
      {children}
    </section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-lg bg-slate-800 px-3 py-2">
      {text}
    </span>
  );
}

export default function CategoryOverview({
  info,
  technologies,
  onSelectTechnology,
}: Props) {
  return (
    <div className="space-y-8">

      <div className="rounded-3xl border border-sky-500/20 bg-slate-900 p-8">

        <h2 className="mb-4 text-5xl font-black">
          {info.title}
        </h2>

        <p className="text-lg text-slate-300">
          {info.description}
        </p>

      </div>

      <Card title="🎯 Why Learn It?">
        <p className="text-slate-300">
          {info.why}
        </p>
      </Card>

      <Card title="🛠 What You'll Build">
        <div className="flex flex-wrap gap-3">
          {info.whatYouBuild.map((item) => (
            <Badge key={item} text={item} />
          ))}
        </div>
      </Card>

      <Card title="🌍 Used By">
        <div className="flex flex-wrap gap-3">
          {info.usedBy.map((item) => (
            <Badge key={item} text={item} />
          ))}
        </div>
      </Card>

      <Card title="🗺 Learning Roadmap">

        <div className="space-y-3">

          {info.roadmap.map((step, index) => {

            const technology = technologies.find(
              (t) =>
                t.name.toLowerCase() ===
                step.toLowerCase()
            );

            return (

              <button
                key={step}
                disabled={!technology}
                onClick={() => {
                  if (technology) {
                    onSelectTechnology(technology);
                  }
                }}
                className={`flex w-full items-center gap-4 rounded-xl p-3 text-left transition

                ${
                  technology
                    ? "hover:bg-slate-800"
                    : "cursor-default opacity-60"
                }`}
              >

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 font-bold">
                  {index + 1}
                </span>

                <span className="flex-1">
                  {step}
                </span>

                {technology && (
                  <span className="text-sky-400">
                    →
                  </span>
                )}

              </button>

            );

          })}

        </div>

      </Card>

      <Card title="💼 Careers">
        <div className="flex flex-wrap gap-3">
          {info.careers.map((career) => (
            <Badge key={career} text={career} />
          ))}
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">

        <Card title="⭐ Difficulty">
          <div className="text-4xl">
            {"⭐".repeat(info.difficulty)}
          </div>
        </Card>

        <Card title="⏱ Average Learning Time">
          <div className="text-2xl font-bold">
            {info.averageTime.min}–{info.averageTime.max}{" "}
            {info.averageTime.unit}
          </div>
        </Card>

      </div>

      <Card title="📚 Technologies">

        <div className="flex flex-wrap gap-4">

          {technologies.map((technology) => {

            const Icon = technology.icon;

            return (

              <button
                key={technology.id}
                onClick={() =>
                  onSelectTechnology(technology)
                }
                className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800 px-5 py-4 transition hover:border-sky-400"
              >

                <Icon
                  size={28}
                  color={technology.color}
                />

                {technology.name}

              </button>

            );

          })}

        </div>

      </Card>

    </div>
  );
}