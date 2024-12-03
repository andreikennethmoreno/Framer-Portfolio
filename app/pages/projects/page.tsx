import Link from "next/link";
import ProjectImgContainer from "../../components/ProjectImgContainer";

import n4 from "../../../public/img/projects/NATURE/n4.webp";
import n5 from "../../../public/img/projects/NATURE/n5.webp";

import p6 from "../../../public/img/projects/PLACES/p6.webp";
import p5 from "../../../public/img/projects/PLACES/p5.webp";

import r4 from "../../../public/img/projects/ROOMS/r4.gif";
import r5 from "../../../public/img/projects/ROOMS/r5.webp";


export default function ProjectList() {
    const projects = [
        { id: 1, title: "NATURE", isOdd: true, imgSrc: [n4.src, n5.src] },
        { id: 2, title: "PLACES", isOdd: false, imgSrc: [p5.src, p6.src] },
        { id: 3, title: "ROOMS", isOdd: true, imgSrc: [r4.src, r5.src] },
    ];

    const imageDimensions = [
        { height: 300, width: 521 },
        { height: 300, width: 300 }
    ];

    return (
        <>
            {projects.map((project) => (
                <Link key={project.id} href={`pages/projects/${project.id}`}>
                    <ProjectImgContainer
                        title={project.title}
                        isOdd={project.isOdd}
                        projectId={project.id}
                        images={project.imgSrc.map((src, index) => ({
                            src,
                            alt: `A picture for ${project.title} ${index + 1}`,
                            ...imageDimensions[index], // Dynamically add height and width
                        }))}
                    />
                </Link>
            ))}
        </>
    );
}
