import axios from "axios";
import toast from "react-hot-toast";

import { AddForm } from "@/modules/interface/FormValues";
import { FetcherResponse } from "@/helper/dataFetcher";

export const editHandler = async (profileData: AddForm) => {
  const { status } = await axios.patch<FetcherResponse>(
    "/api/profile/edit",
    profileData
  );
  if (status === 200) {
    toast.success("done");
  }
};
