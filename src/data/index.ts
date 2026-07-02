import frontend from "./frontend";
import backend from "./backend";
import database from "./database";
import devops from "./devops";
import security from "./security";
import mobile from "./mobile";
import ai from "./ai";

export const categories = [
  {
    id: "frontend",
    name: "🌐 Frontend",
    technologies: frontend,
  },
  {
    id: "backend",
    name: "⚙ Backend",
    technologies: backend,
  },
  {
    id: "database",
    name: "🗄 Database",
    technologies: database,
  },
  {
    id: "devops",
    name: "☁ DevOps",
    technologies: devops,
  },
  {
    id: "security",
    name: "🔒 Security",
    technologies: security,
  },
  {
    id: "mobile",
    name: "📱 Mobile",
    technologies: mobile,
  },
  {
    id: "ai",
    name: "🤖 AI",
    technologies: ai,
  },
];