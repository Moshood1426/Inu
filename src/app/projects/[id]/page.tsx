import ProjectOne from "@/components/project_details/projectOne/projectOne";
import ProjectTwo from "@/components/project_details/projectTwo/projectTwo";
import ProjectFour from "@/components/project_details/projectFour/projectFour";
import ProjectThree from "@/components/project_details/projectThree/projectThree";
import ProjectFive from "@/components/project_details/projectFive/projectFive";

interface Props {
  params: {
    id: string;
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const { id } = params;

  return (
    <div>
      {+id === 1 && <ProjectOne />}
      {+id === 2 && <ProjectTwo />}
      {+id === 3 && <ProjectThree />}
      {+id === 4 && <ProjectFour />}
      {+id === 5 && <ProjectFive />}
    </div>
  );
};

export default Page;
