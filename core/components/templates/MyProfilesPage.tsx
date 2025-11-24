"use client";
import React from "react";
import Image from "next/image";
import { ProfileProps } from "@/helper/myProfiles";
import { Grid } from "@mui/material";

import styles from "@/templates/styles/myProfiles/route.module.css";
import { usePathname, useRouter } from "next/navigation";

interface ProfileInterface {
  profiles: ProfileProps;
}
const MyProfilesPage = ({ profiles: { profiles } }: ProfileInterface) => {
  const router = useRouter();
  const pathName = usePathname();
  const clickHandler = (make: string, model: string, id: string) => {
    if (pathName.includes("my-profiles")) {
      router.push(`/marketplace/detail/${make}/${model}/${id}`);
    }
  };

  return (
    <Grid container spacing={2}>
      {profiles.map((item, index) => (
        <Grid key={index} size={{ xs: 6, md: 4 }}>
          <div
            className={styles.container}
            onClick={() =>
              clickHandler(item.model_make_id, item.model_name, item._id)
            }
          >
            <div className={styles.container__image}>
              <Image
                src={item.image}
                alt={"cardPic"}
                fill
                sizes="(max-width:576px) 100vw, 30vw"
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
