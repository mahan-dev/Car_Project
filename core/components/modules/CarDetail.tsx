import { IoSpeedometerOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import styles from "@/modules/styles/carDetail/route.module.css";
import CarContent from "@/elements/CarContent";
import { objectHelper } from "@/helper/carDetail";
import { ProfileInterface } from "@/models/interface/profileSchema";
import { sp } from "@/utils/numberFormatter";

interface CarDetail {
  data: { [key: string]: string } & Partial<ProfileInterface>;
}
const CarDetail = ({ data }: CarDetail) => {
  console.log(data);
  if (!data) return;
  return (
    <div className={styles.container}>
      <div className={styles.container__box}>
        Country
        <p>{objectHelper(data.make_country)}</p>
      </div>
      <div className={styles.container__box}>
        Year
        <p>{objectHelper(sp(data.model_year || data.year))}</p>
      </div>

      <h2 className={styles.container__title}>
        Specification
        <IoSpeedometerOutline />
      </h2>
      <CarContent data={data} title={"specification"} />

      <h2 className={styles.container__title}>
        Performance
        <FiSettings />
      </h2>
      <CarContent data={data} title={"performance"} />
    </div>
  );
};

export default CarDetail;
