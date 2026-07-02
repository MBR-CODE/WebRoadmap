import type { Technology } from "../../types/Technology";
import { SiAuth0 } from "react-icons/si";

const oauth: Technology = {
  id: "oauth",

  name: "OAuth 2.0",

  category: "Authorization",

  icon: SiAuth0,

  color: "#EB5424",

  description:
    "OAuth 2.0 allows users to authorize applications without sharing their passwords.",

  why:
    "It powers 'Sign in with Google', 'Sign in with GitHub', and many other third-party login systems.",

  difficulty: "Advanced",

  prerequisites: [
    "HTTP",
    "JWT"
  ],

  beginner: [
    "Authorization",
    "Clients",
    "Scopes"
  ],

  intermediate: [
    "Authorization Code Flow",
    "PKCE",
    "Refresh Tokens"
  ],

  advanced: [
    "OpenID Connect",
    "Identity Providers",
    "Enterprise Authentication"
  ],

  tools: [
    "Auth0",
    "Google OAuth",
    "GitHub OAuth"
  ],

  projects: {
    beginner: [
      "Google Login"
    ],

    intermediate: [
      "GitHub Login"
    ],

    advanced: [
      "Multi-provider Authentication"
    ]
  },

  next: [
    "OpenID Connect"
  ],

  careers: [
    "Backend Developer",
    "Security Engineer"
  ],

  resources: [
    {
      title: "OAuth 2.0",
      url: "https://oauth.net/2/"
    }
  ]
};

export default oauth;