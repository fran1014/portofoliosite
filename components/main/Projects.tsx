import React from 'react';
import ProjectCard from '../sub/ProjectCard';

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next js Portfolio"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
        <ProjectCard
          src="/booking.png"
          title="Booking Clone Web Scraper- (React,Next.js, TypeScript, Tailwind, Shadcn)"
          description="Web scraping app, use in the ethical way to extract information from any site, using Oxylabs. The front of the app displays a clone of the booking.com site"
          linkUrl="https://booking-clone-nextjs.netlify.app/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Phyton"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Phyton"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Phyton"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
        <ProjectCard
          src="/contentcreation.png"
          title="Full-Stack Content AI - Mongo DB, Express js, React, Node "
          description="Paragraph is a SaaS App which is  platform that allows artist, writers, podcasters and beyond to build a sustain building and connecting with their community,"
          linkUrl="https://paragraph.xyz/"
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Phyton"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Phyton"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Phyton"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Phyton"
          description="Lorem ipsum dolor sir amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ur labore et dolore magna alique"
          linkUrl=""
        />
      </div>
    </div>
  );
}

export default Projects;