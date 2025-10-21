
interface DataProps {
  data: { [key: string]: string };
}
export const dataHandler = ({ data }: DataProps) => {
  const {
    model_transmission_type,
    model_drive,
    model_engine_cyl,
    model_engine_cc,
  } = data;

  return {
    GearBox: model_transmission_type,
    Drive: model_drive,
    Cylinder: model_engine_cyl,
    Engine: model_engine_cc + " " + "cc",
  };
};
