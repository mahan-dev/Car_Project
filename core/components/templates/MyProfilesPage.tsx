"use client";
import React from "react";
import Image from "next/image";
import { ProfileProps } from "@/helper/myProfiles";
import { Button, Grid } from "@mui/material";

import styles from "@/templates/styles/myProfiles/route.module.css";
import { usePathname, useRouter } from "next/navigation";
import { FaEdit } from "react-icons/fa";
import axios from "axios";

interface ProfileInterface {
  profiles: ProfileProps;
  role: "ADMIN" | "USER";
}
const MyProfilesPage = ({ profiles: { profiles }, role }: ProfileInterface) => {
  const router = useRouter();
  const pathName = usePathname();

  const clickHandler = (make: string, model: string, id: string) => {
    if (pathName.includes("my-profiles")) {
      router.push(`/marketplace/detail/${make}/${model}/${id}`);
    }
  };

  const editHandler = (id: string) => {
    router.push(`/dashboard/my-profiles/${id}`);
  };

  const deleteHandler = async (id: string) => {
    const { status } = await axios.delete(`/api/admin/remove/${id}`);
    if (status === 200) router.refresh();
  };

  const publishHandler = async (id: string) => {
    console.log("hi");
    console.log(id);

    const res = await axios.get(`/api/admin/${id}`);
    console.log(res);
  };
  return (
    <Grid container spacing={2}>
      {profiles.map((item, index) => (
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

              {role === "USER" && (
                <Button
                  sx={{ minWidth: "auto", width: "50px", padding: "0.2rem" }}
                  variant="outlined"
                  onClick={() => editHandler(item._id)}
                >
                  <FaEdit />
                </Button>
              )}

              {role === "ADMIN" && (
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    marginTop: "1.5rem",
                  }}
                >
                  <Button
                    variant="outlined"
                    onClick={() => deleteHandler(item._id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => publishHandler(item._id)}
                  >
                    Publish
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default MyProfilesPage;
