import Container from "../layout/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] items-center"
    >
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-red-500">
            Interactive Learning
          </p>

          <h1 className="text-6xl font-black leading-tight lg:text-7xl">

            Learn

            <span className="text-red-500">
              {" "}Web Development{" "}
            </span>

            Visually

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">

            Explore complete learning roadmaps for Frontend, Backend,
            Databases, DevOps, Security, Mobile Development and AI.
            Learn each technology in the recommended order with
            explanations, resources and career guidance.

          </p>

        </div>

      </Container>
    </section>
  );
}