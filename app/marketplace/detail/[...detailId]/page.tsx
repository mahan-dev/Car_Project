import CarDetailsPage from "@/templates/CarDetailsPage";
import { ProfileInterface } from "@/models/interface/profileSchema";
import { Profile } from "@/models/profile";

interface pageInterface {
  params: Promise<{ detailId: string }>;
}

interface resultInterface {
  [key: string]: string & Partial<ProfileInterface>;
}

const page = async ({ params }: pageInterface) => {
  const { detailId } = await params;
  const make = detailId[0];
  const model = detailId[1];
  const id = detailId[2];

  const profile = await Profile.findOne({
    $and: [
      { model_make_id: make },
      { model_name: model },
      {
        _id: id,
      },
    ],
  });

  const data: resultInterface = JSON.parse(JSON.stringify(profile));

  return <CarDetailsPage data={data} />;
};

export default page;
