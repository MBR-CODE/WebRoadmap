import type { Technology } from "../../types/Technology";
import { FaAws } from "react-icons/fa";

const aws: Technology = {
  id: "aws",

  name: "Amazon Web Services",

  category: "Cloud Platform",

  icon: FaAws,

  color: "#FF9900",

  description:
    "AWS is the world's largest cloud platform offering hundreds of services for hosting, databases, AI, networking and storage.",

  why:
    "Most enterprise applications are hosted on AWS, making it one of the most valuable cloud skills.",

  difficulty: "Advanced",

  prerequisites: [
    "Linux",
    "Networking",
    "Docker"
  ],

  beginner: [
    "EC2",
    "S3",
    "IAM",
    "CloudWatch"
  ],

  intermediate: [
    "RDS",
    "VPC",
    "Elastic Beanstalk",
    "Route 53"
  ],

  advanced: [
    "ECS",
    "EKS",
    "Lambda",
    "CloudFormation",
    "Auto Scaling"
  ],

  tools: [
    "AWS Console",
    "AWS CLI",
    "CloudShell"
  ],

  projects: {
    beginner: [
      "Host a Static Website"
    ],

    intermediate: [
      "Deploy a REST API"
    ],

    advanced: [
      "Scalable SaaS Infrastructure"
    ]
  },

  next: [
    "Terraform",
    "Kubernetes"
  ],

  careers: [
    "Cloud Engineer",
    "DevOps Engineer",
    "Solutions Architect"
  ],

  resources: [
    {
      title: "AWS Documentation",
      url: "https://docs.aws.amazon.com/"
    }
  ]
};

export default aws;