import type { projects } from "../data/projects";

export type ProjectSlug = (typeof projects)[number]["slug"];
