interface DataProps {
  data: { [key: string]: string };
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
  } = data;

  return {
    carDetail: [
      {
        specification: {
          "Gear Box": model_transmission_type,
          "Drive Model": model_drive,
          "Motor Cylinder": model_engine_cyl,
          "Engine Volume": model_engine_cc && model_engine_cc + " " + "cc",
        },

        performance: {
          Power:
            model_engine_power_ps &&
            model_engine_power_ps + " " + "Horse Power",
          Torque: model_engine_torque_nm && model_engine_torque_nm + " " + "nm",
          Acceleration: model_0_to_100_kph && model_0_to_100_kph + " s",
          Speed: model_top_speed_kph && model_top_speed_kph + " kph",
          "Mixed Consumption": model_lkm_mixed && model_lkm_mixed + " litr",
        },
      },
    ],
  };
};
