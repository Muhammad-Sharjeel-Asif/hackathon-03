import ChefSection, { ChefProp } from "../Components/Chef_components/ChefSection";
import BgPic from "@/app/Components/BgPic";
import Header from "../Components/Header";
import { fetchChefs } from "@/sanity/utils";

const Chef = async (): Promise<JSX.Element> => {
  const chefData: ChefProp[] = await fetchChefs();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#FFFFFF]">
        <BgPic PageHeading="Our Chef" PageName="Chef" />
        <ChefSection chefData={chefData} />
      </div>
    </>
  );
};

export default Chef;
