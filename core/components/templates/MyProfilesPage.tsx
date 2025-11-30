"use client";
import React from "react";
import Image from "next/image";
import { ProfileProps } from "@/helper/myProfiles";
import { Grid } from "@mui/material";

import styles from "@/templates/styles/myProfiles/route.module.css";
import { usePathname, useRouter } from "next/navigation";

import { FetcherResponse } from "@/core/helper/dataFetcher";
import MyProfileButton from "@/elements/MyProfileButton";

interface ProfileInterface {
  profiles: ProfileProps | FetcherResponse[];
  role?: "ADMIN" | "USER";
}
const MyProfilesPage = ({ profiles, role }: ProfileInterface) => {
  const router = useRouter();
  const pathName = usePathname();

  const data = Array.isArray(profiles) ? profiles : profiles.profiles;

  const clickHandler = (make: string, model: string, id: string) => {
    if (pathName.includes("my-profiles")) {
      router.push(`/marketplace/detail/${make}/${model}/${id}`);
    }
  };

  return (
    <Grid container spacing={2}>
      {data.map((item, index) => (
        <Grid key={index} size={{ xs: 6, md: 4 }}>
          <div className={styles.container}>
            <div
              className={styles.container__image}
              onClick={() =>
                clickHandler(item.model_make_id, item.model_name, item._id)
              }
            >
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
              <div className={styles.description__info}>
                <p>year: {item.year}</p>

                <p>type: {item.category} </p>
              </div>

              <MyProfileButton role={role} data={item._id} />
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyProfilesPage;
