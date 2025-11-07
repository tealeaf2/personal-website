import React, { useState, useEffect } from "react";
import { Github, MapPin } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

interface Project {
  id: number;
  date: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  location: string;
  githubUrl: string;
}

const projectData: Project[] = [
  {
    id: 1,
    date: "Oct 2025",
    title: "b-minor compiler",
    shortDescription: "A compiler for a subset of the C programming language.",
    description:
      "A compiler for a subset of the C programming language, called B-Minor, which includes functions, conditionals, loops, and basic data types. It translates B-Minor code into assembly and does optimizations and typechecking using LLVM.",
    tech: ["C", "Flex/Bison", "LLVM"],
    location: "Notre Dame, IN",
    githubUrl: "https://github.com/tealeaf2/kle2-compiler",
  },
  {
    id: 2,
    date: "Sep 2025",
    title: "ai recommender systems for clothing",
    shortDescription: "A clothing recommender system built with NCF and GRUs.",
    description:
      "An exploration of AI recommender systems, suggesting daily outfits based on user trends, weather, location, occasion, and personal style. Implemented using Neural Collaborative Filtering (NCF) and Gated Recurrent Units (GRUs).",
    tech: ["Python", "Spark", "TensorFlow"],
    location: "Notre Dame, IN",
    githubUrl: "https://github.com/tealeaf2/daily-outfit-recommender",
  },
  {
    id: 3,
    date: "Jun 2025",
    title: "aws mediatailor internship",
    shortDescription: "Real-time ad insertion and stream matching.",
    description:
      "During my internship, I designed and implemented a system to match ad content to video streams in real-time. Using Cloudwatch, S3, and MediaConvert, I aggregrated data to apply the best possible segment lengths for HLS, DASH, and CMAF content, improving playback compatibility for millions of users.",
    tech: ["Kotlin", "AWS", "S3", "Cloudwatch", "Distributed Systems", "JavaScript", "Python"],
    location: "Portland, OR",
    githubUrl: "#",
  },
  {
    id: 4,
    date: "Jan 2025",
    title: "digibooks",
    shortDescription: "A platform attempting to combine online scrapbooking and location reviews.",
    description:
      "Built a full-stack web application that allows users to create digital scrapbooks with photos, notes, and location tags. Integrated with Back4App and Parse for backend services, and utilized Fabric.js for an interactive canvas. Implemented Unsplash API for high-quality images and Google Maps API for location tagging.",
    tech: ["React", "Back4App", "Parse", "Frabric.js", "Unsplash API", "Google Maps API"],
    location: "Notre Dame, IN",
    githubUrl: "https://github.com/tealeaf2/digibooks",
  },
  {
    id: 5,
    date: "Aug 2024",
    title: "riverbend community math center",
    shortDescription: "A scalable web app for student-faculty activities.",
    description:
      "Partnered with the Riverbend Community Math Center to architect and develop multiple educational tools, including a Turtle compiler and a frequency visualizer, which are currently being used in educational labs.",
    tech: ["HTML", "JavaScript", "Figma"],
    location: "South Bend, IN",
    githubUrl: "https://github.com/orgs/Riverbend-CS4Good/repositories",
  },
  {
    id: 6,
    date: "Jun 2024",
    title: "redi-net developer internship",
    shortDescription: "Interned at the Center of Research and Computing (CRC) to revamp their mobile and web applications.",
    description:
      "Collaborated with developers to improve token validation and file uploading features that greatly reduced bugs in data collection. Also optimized website sidebar for seamless scalability and responsiveness, improving load times by 80% and allowing for cross platform compatibility.",
    tech: ["Vue", "Ionic", "Django", "Docker", "PostgreSQL"],
    location: "Notre Dame, IN",
    githubUrl: "#",
  },
  {
    id: 7,
    date: "Sep 2023",
    title: "alora finance",
    shortDescription: "Led a full-stack team to build a financial education app.",
    description:
      "Led a team of 10 student developers to design and build an open-source finance educational platform for elementary schools. Worked with the local school curriculum board to serve over 800 students and multiple faculty members as beta testers resulting in a decrease in bug reports and positive feedback from 90% of users.",
    tech: ["React", "Django", "Canvas", "UI/UX Design", "JWT"],
    location: "South Bend, IN",
    githubUrl: "https://github.com/tealeaf2/Alora-Finance",
  },
  {
    id: 8,
    date: "Aug 2023",
    title: "aerospace student researcher",
    shortDescription: "Developing AI models for radiance predictions.",
    description:
      "Researched an AI model to predict radiance of various mediums and applying Monte Carlo to stimulate raytracing of photons in the air. Analyzed experimental data to optimize regression that led to 30% increase in accuracy.",
    tech: ["Python", "PhiFlow", "CNNs", "Pytorch"],
    location: "Notre Dame, IN",
    githubUrl: "https://github.com/tealeaf2/plume-predictions",
  },
  {
    id: 9,
    date: "Jun 2023",
    title: "classification of pickup lines",
    shortDescription: "An classification model that attempts to predict the probability of pickup lines working.",
    description:
      "A beginner attempt at building a classification model that predicts the effectiveness of pickup lines using NLP techniques. Utilized a dataset of pickup lines labeled as successful or unsuccessful to train and evaluate, achieving notable accuracy improvements through hyperparameter tuning.",
    tech: ["Python", "Keras", "TensorFlow"],
    location: "London, UK",
    githubUrl: "https://github.com/tealeaf2/Pickup-Lines-Classification",
  }, 
];

// --- 3. The Main Projects Page Component ---
export default function Projects(): React.ReactElement {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full max-w-7xl mx-auto p-4 sm:p-8">
      <h1 className={`
        text-4xl md:text-5xl font-bold text-center mb-16
        transition-all duration-1500 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
      `}>
        <span className={`
          relative inline-block
          after:absolute after:bottom-2 md:after:bottom-3 after:left-0 after:h-4 md:after:h-6 after:w-full after:bg-[#add0b3] after:bg-opacity-40
          after:origin-left after:transition-transform after:duration-1000 after:ease-out after:delay-200
          ${isVisible ? 'after:scale-x-100' : 'after:scale-x-0'}
        `}>
          <span className="relative z-10">projects & experience</span>
        </span>
      </h1>

      {/* Timeline Container */}
      <div className="relative w-full max-w-4xl mx-auto">

        <div
          className="absolute top-0 w-1 h-full bg-[#add0b3] left-10 md:left-1/2 md:-translate-x-1/2"
        ></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {projectData.map((project, index) => (
            <TimelineItem
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface TimelineItemProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

function TimelineItem({ project, index, isVisible }: TimelineItemProps): React.ReactElement {
  const isDesktopLeft = index % 2 !== 0;

  return (
    <div
      key={project.id}
      className={`
        relative pl-20 md:pl-0
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}
    >
      {/* Date timeline */}
      <div
        className="absolute top-0 -translate-x-1/2 z-10 py-1 px-3 rounded-lg shadow-md bg-white border-1 border-[#add0b3] left-10 md:left-1/2"
      >
        <span className="text-sm font-semibold text-[#225a30]">
          {project.date}
        </span>
      </div>

      <div className="py-4">
        <HoverCard>
          <HoverCardTrigger asChild>
            {/* Project Card */}
            <div
              className={`
          relative px-6
          cursor-pointer transition-all duration-300
          md:w-[calc(50%-3rem)]
          ${isDesktopLeft ? 'md:mr-auto' : 'md:ml-auto'}
        `}
            >
              <div className="hover:scale-102 duration-200 ease-in-out">
              <h3 className={`text-xl font-bold ${isDesktopLeft ? 'md:text-right' : ''}`}>
                {project.title}
              </h3>
              <div className={`flex items-center gap-1.5 mt-1.5 ${isDesktopLeft ? 'md:justify-end' : ''}`}>
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <p className="text-gray-400 text-xs font-medium">
                  {project.location}
                </p>
              </div>
              <p className={`text-gray-500 mt-1 text-sm ${isDesktopLeft ? 'md:text-right' : ''}`}>
                {project.shortDescription}
              </p>
              </div>
            </div>
          </HoverCardTrigger>
          <HoverCardContent
            className="hidden md:block w-96 p-4 relative mx-4"
            side="bottom"
            align={isDesktopLeft ? "end" : "start"}
          >
            {/* Main content wrapper */}
            <div className="space-y-4"> {/* Added bottom padding */}

              {/* Full Description */}
              <p className="lg:text-sm md:text-xs text-gray-800 leading-relaxed">
                {project.description}
                {project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex align-middle ml-1.5 text-gray-600 hover:text-gray-900 transition-colors hover:scale-105"
                  aria-label="View on GitHub"
                >
                  {/* Use the Lucide icon component */}
                  <Github className="w-5 h-5" />
                </a>
              )}
              </p>

              {/* Tech Stack Section */}
              <div>
                <h4 className="text-xs font-semibold uppercase text-gray-500 tracking-wider mb-2">
                  Key Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-md bg-[#add0b3]/20 px-1 py-1 text-xs font-semibold text-[#225a30]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    </div>
  );
}