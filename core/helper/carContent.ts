import { ProfileInterface } from "@/models/interface/profileSchema";
import { objectHelper } from "@/helper/carDetail";

interface DataProps {
  data: { [key: string]: string } | ProfileInterface;
}
export const dataHandler = ({ data }: DataProps) => {

  
  const {
    model_transmission_type,
    model_drive,
    model_engine_cyl,
    model_engine_cc,
    model_engine_power_ps,
    model_engine_torque_nm,
    model_0_to_100_kph,
    model_top_speed_kph,
    model_lkm_mixed,
    gearbox,
    cylinder,
  } = data as { [key: string]: string };

  return {
    carDetail: [
      {
        specification: {
          "Gear Box": model_transmission_type || gearbox,
          "Drive Model": model_drive,
          "Motor Cylinder": model_engine_cyl || cylinder,
          "Engine Volume": objectHelper(model_engine_cc || data.engine, "cc"),
        },

        performance: {
          Power: objectHelper(model_engine_power_ps, "Hp"),
          Torque: objectHelper(model_engine_torque_nm, "nm"),
          Acceleration: objectHelper(model_0_to_100_kph, "s"),
          Speed: objectHelper(model_top_speed_kph, "kph"),
          "Mixed Consumption": objectHelper(model_lkm_mixed, "litr"),
        },
      },
    ],
  };
};
