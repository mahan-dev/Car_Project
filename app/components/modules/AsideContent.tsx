import React from "react";

import styles from "@/modules/styles/asideContent/route.module.css";
import { MdAccountCircle } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import Link from "next/link";
const AsideContent = () => {
  return (
    <ul className={styles.list}>
      <li>
        <Link href={""}>
          <MdAccountCircle />
          Account
        </Link>
      </li>
      <li>
        <Link href={""}>
          <RiFileList3Fill />
          My profiles
        </Link>
      </li>
      <li>
        <Link href={""}>
          <IoMdSettings />
          settings
        </Link>
      </li>
      <li>
        <Link href={""}>
          <BsFillBookmarkHeartFill />
          Whish list
        </Link>
      </li>
    </ul>
  );
};

export default AsideContent;
