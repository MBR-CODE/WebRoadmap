import type { Technology } from "../../types/Technology";
import { SiKubernetes } from "react-icons/si";

const kubernetes: Technology = {
  id: "kubernetes",

  name: "Kubernetes",

  category: "Container Orchestration",

  icon: SiKubernetes,

  color: "#326CE5",

  description:
    "Kubernetes automates the deployment, scaling and management of containerized applications.",

  why:
    "It is the industry standard for running large-scale applications in production.",

  difficulty: "Advanced",

  prerequisites: [
    "Docker",
    "Linux",
    "Networking"
  ],

  beginner: [
    "Pods",
    "Deployments",
    "Services",
    "Namespaces"
  ],

  intermediate: [
    "ConfigMaps",
    "Secrets",
    "Volumes",
    "Ingress"
  ],

  advanced: [
    "Helm",
    "Autoscaling",
    "StatefulSets",
    "Operators"
  ],

  tools: [
    "kubectl",
    "Minikube",
    "Lens"
  ],

  projects: {
    beginner: [
      "Deploy a Node.js API"
    ],

    intermediate: [
      "MERN Application"
    ],

    advanced: [
      "Production Cluster"
    ]
  },

  next: [
    "AWS",
    "Azure"
  ],

  careers: [
    "DevOps Engineer",
    "Cloud Engineer"
  ],

  resources: [
    {
      title: "Kubernetes Documentation",
      url: "https://kubernetes.io/docs/"
    }
  ]
};

export default kubernetes;