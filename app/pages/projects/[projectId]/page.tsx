'use client'; // Ensure this is a client-side component

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';  // Add useRouter for navigation
import HeroLayout from '@/app/components/HeroLayout';

import n1 from "../../../../public/img/projects/NATURE/n1.gif";
import n2 from "../../../../public/img/projects/NATURE/n2.gif";
import n3 from "../../../../public/img/projects/NATURE/n3.gif";
import n4 from "../../../../public/img/projects/NATURE/n4.webp";
import n5 from "../../../../public/img/projects/NATURE/n5.webp";
import n6 from "../../../../public/img/projects/NATURE/n6.gif";

import r1 from "../../../../public/img/projects/ROOMS/r1.gif";
import r2 from "../../../../public/img/projects/ROOMS/r2.gif";
import r3 from "../../../../public/img/projects/ROOMS/r3.gif";
import r4 from "../../../../public/img/projects/ROOMS/r4.gif";
import r5 from "../../../../public/img/projects/ROOMS/r5.webp";
import r6 from "../../../../public/img/projects/ROOMS/r6.webp";

import p1 from "../../../../public/img/projects/PLACES/p1.webp";
import p2 from "../../../../public/img/projects/PLACES/p2.gif";
import p3 from "../../../../public/img/projects/PLACES/p3.gif";
import p4 from "../../../../public/img/projects/PLACES/p4.gif";
import p5 from "../../../../public/img/projects/PLACES/p5.webp";
import p6 from "../../../../public/img/projects/PLACES/p6.webp";

import ContentLayout from '@/app/components/ContentLayout';
import SubTitle from '@/app/components/SubTitle';
import Image from "next/image";


interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc: string[]; // Images associated with the project
}

export default function ProjectDetail() {
  const pathname = usePathname(); // Get the current pathname, e.g., /projects/1
  const router = useRouter();  // Initialize useRouter for navigation
  const [project, setProject] = useState<Project | null>(null); // Type this if you want specific type later

  // Mock project data
  const projects: Project[] = [
    { 
      id: 1, 
      title: 'NATURE', 
      description: 'Description of NATURE project',
      imgSrc: [n4.src, n2.src, n3.src, n5.src, n6.src, n1.src] 
    },
    { 
      id: 2, 
      title: 'PLACES', 
      description: 'Description of PLACES project',
      imgSrc: [p6.src ,p4.src ,p1.src, p2.src, p5.src , p3.src] 
    },
    { 
      id: 3, 
      title: 'ROOMS', 
      description: 'Description of ROOMS project',
      imgSrc: [r4.src ,r1.src, r2.src, r5.src , r3.src, r6.src] 
    },
  ];

  useEffect(() => {
    const projectId = pathname?.split('/').pop(); // Extract projectId from the URL
    const projectDetails = projects.find(p => p.id.toString() === projectId);

    setProject(projectDetails || null); // Set the project or null if not found
  }, [pathname]);

  // Get the current index and calculate previous/next projects with looping
  const currentIndex = project ? projects.findIndex(p => p.id === project.id) : -1;
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length] || null;
  const nextProject = projects[(currentIndex + 1) % projects.length] || null;

  const handleNavigation = (target: Project | null) => {
    if (target) {
      router.push(`${target.id}`); // Ensure correct path
    }
  };

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <>
      <HeroLayout heroTitle={project.title} heroSrcImg={project.imgSrc[0]} />

      <div>
        <ContentLayout
          content={
            <>
              <div className="flex items-center justify-center w-full h-[60vh]">
                <p className="font-bold text-4xl text-center">{project.description}</p>
              </div>

              {project.imgSrc.map((src, index) => (
                <div key={index} className='my-2'>
                  <Image
                    src={src} // Corrected src prop
                    alt={`Image of the ${project.title} project`}
                    height={400}
                    width={400}
                    layout="intrinsic"
                    className="w-full h-auto object-cover"
                    style={{ imageRendering: 'pixelated' }}
                  />
                </div>
              ))}

              <div className="flex justify-around w-full h-[60vh] items-center">
                {prevProject && (
                  <button
                    onClick={() => handleNavigation(prevProject)}
                    className="font-bold text-xl text-center p-4 border rounded hover:bg-gray-200"
                  >
                    <SubTitle title={"/" + prevProject.title} />
                  </button>
                )}

                {nextProject && (
                  <button
                    onClick={() => handleNavigation(nextProject)}
                    className="font-bold text-xl text-center p-4 border rounded hover:bg-gray-200"
                  >
                    <SubTitle title={"/" + nextProject.title} />
                  </button>
                )}
              </div>
            </>
          }
        />
      </div>
    </>
  );
}
