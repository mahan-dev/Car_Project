import AddCar from "@/modules/AddCar";
import { FetcherResponse } from "@/helper/interface/dataFetcher/interface";
import { Profile } from "@/models/profile";
import { connectDb } from "@/utils/connectDb";

interface ProfileDetailProps {
  params: Promise<{ profileId: string }>;
}

const ProfileDetail = async ({ params }: ProfileDetailProps) => {
  const { profileId } = await params;

  await connectDb();

  const data = await Profile.findOne({ _id: profileId });

  const parsedData: FetcherResponse = JSON.parse(JSON.stringify(data));

  return (
    <div>
      <AddCar title="Edit Car" profile={parsedData} />
    </div>
  );
};

export default ProfileDetail;
