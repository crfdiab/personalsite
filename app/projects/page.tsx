import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "My Previous SEO Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">My Previous SEO Projects</h1>
      <div className="space-y-6">
        {projects.map((project, index) => (
          
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {project.title}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {project.year}
                </span>
              </div>
              <p className="prose prose-neutral dark:prose-invert pt-3">
                {project.description}
              </p>
              <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-sky-500/[.55]"
          >
              Link On GDrive
          </a>
          <p className="prose prose-neutral dark:prose-invert pt-3">
                <strong className="bg-blue-200">Total Search Clicks: {project.clicks}</strong> 
          </p>
          <p className="prose prose-neutral dark:prose-invert pt-3">
                <strong className="bg-purple-400">Total Search Impressions: {project.impressions}</strong> 
          </p>
          <p className="prose prose-neutral dark:prose-invert pt-3">
                <strong className="bg-green-400">Average CTR (Click Through Rate): {project.ctr}</strong> 
          </p>
          <p className="prose prose-neutral dark:prose-invert pt-3">
                <strong className="bg-yellow-300">Average Position: {project.position}</strong> 
          </p>
          <p className="prose prose-neutral dark:prose-invert pt-3">
                <strong>Timespan: {project.time}</strong> 
          </p>
          <br></br>
          <hr></hr>
            </div>
          
        ))}
      </div>
    </section>
  );
}