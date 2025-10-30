type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <a
    href={link}
    target="_blank"
    className="block border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition"
  >
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </a>
);
