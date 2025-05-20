import ProjectOne from "@/components/project_details/projectOne/projectOne";
import ProjectTwo from "@/components/project_details/projectTwo/projectTwo";
import ProjectFour from "@/components/project_details/projectFour/projectFour";
import ProjectThree from "@/components/project_details/projectThree/projectThree";
import ProjectFive from "@/components/project_details/projectFive/projectFive";

function Page({ params }: { params: { id: string } }) {
  const id = +params.id;

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
