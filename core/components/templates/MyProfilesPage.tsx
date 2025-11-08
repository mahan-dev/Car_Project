import React from "react";
import Image from "next/image";
import { ProfileProps } from "@/helper/myProfiles";
import { Grid } from "@mui/material";

import styles from "@/templates/styles/myProfiles/route.module.css";

interface ProfileInterface {
  profiles: ProfileProps;
}
const MyProfilesPage = ({ profiles }: ProfileInterface) => {
  return (
    <Grid container spacing={2}>
      {profiles.profiles.map((item, index) => (
        <Grid key={index} size={{ xs: 6, md: 4 }}>
          <div className={styles.container}>
            <div className={styles.container__image}>
              <Image
                src={item.image}
                alt={"cardPic"}
                fill
                sizes="(max-width:576px) 100vw, 100vw"
                priority={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.container__description}>
              <p>year: {item.year}</p>

              <p>type: {item.category} </p>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyProfilesPage;
