import { useEffect, useState } from "react";

import { categories } from "../../data";
import categoryInfo from "../../data/categoryInfo";

import type { Technology } from "../../types/Technology";

import Node from "./Node";
import InfoPanel from "./InfoPanel";
import CategoryOverview from "./CategoryOverview";

type ViewMode = "overview" | "technology";

export default function Journey() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [selectedTechnology, setSelectedTechnology] =
    useState<Technology>(categories[0].technologies[0]);

  const [view, setView] =
    useState<ViewMode>("overview");

  useEffect(() => {
    if (selectedCategory.technologies.length > 0) {
      setSelectedTechnology(
        selectedCategory.technologies[0]
      );
    }

    setView("overview");
  }, [selectedCategory]);

  const info =
    categoryInfo[
      selectedCategory.id as keyof typeof categoryInfo
    ];

  if (!info) {
    return (
      <section
        id="journey"
        className="py-24"
      >
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="mb-6 text-5xl font-black">
            Web Development Roadmap
          </h2>

          <div className="rounded-2xl border border-red-500 bg-red-500/10 p-8">

            <h3 className="mb-4 text-2xl font-bold text-red-400">
              Category information not found
            </h3>

            <p className="mb-2">
              Selected Category:
            </p>

            <pre className="rounded-lg bg-slate-900 p-4">
              {selectedCategory.id}
            </pre>

            <p className="mt-6 mb-2">
              Available Categories:
            </p>

            <pre className="rounded-lg bg-slate-900 p-4">
              {JSON.stringify(
                Object.keys(categoryInfo),
                null,
                2
              )}
            </pre>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section
      id="journey"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="mb-10 text-5xl font-black">
          Web Development Roadmap
        </h2>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

          <aside className="rounded-3xl border border-slate-700 bg-slate-900 p-6">

            <h3 className="mb-6 text-2xl font-bold">
              Categories
            </h3>

            <div className="space-y-3">

              {categories.map((category) => (

                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full rounded-xl p-4 text-left transition ${
                    selectedCategory.id === category.id
                      ? "bg-sky-500 text-white"
                      : "bg-slate-800 hover:bg-slate-700"
                  }`}
                >

                  <div className="font-semibold">
                    {category.name}
                  </div>

                  <div className="mt-1 text-xs opacity-70">
                    {category.technologies.length} Technologies
                  </div>

                </button>

              ))}

            </div>

          </aside>

          <div>

            {view === "overview" ? (

              <CategoryOverview
                info={info}
                technologies={selectedCategory.technologies}
                onSelectTechnology={(technology) => {
                  setSelectedTechnology(technology);
                  setView("technology");
                }}
              />

            ) : (

              <>

                <button
                  onClick={() => setView("overview")}
                  className="mb-6 rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 transition hover:border-sky-400"
                >
                  ← Back to {info.title}
                </button>

                <div className="mb-8 flex flex-wrap gap-4">

                  {selectedCategory.technologies.map((technology) => (

                    <Node
                      key={technology.id}
                      icon={technology.icon}
                      title={technology.name}
                      active={
                        technology.id ===
                        selectedTechnology.id
                      }
                      onClick={() =>
                        setSelectedTechnology(
                          technology
                        )
                      }
                    />

                  ))}

                </div>

                <InfoPanel
                  technology={selectedTechnology}
                />

              </>

            )}

          </div>

        </div>

      </div>
    </section>
  );
}