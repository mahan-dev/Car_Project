"use client";
import React from "react";
import Link from "next/link";

import styles from "@/modules/styles/asideContent/route.module.css";
import { MdAccountCircle } from "react-icons/md";
import { RiFileList3Fill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { FaSquarePlus } from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import { signOut } from "next-auth/react";
import { MdPendingActions } from "react-icons/md";

interface AsideProps {
  isAdmin: boolean;
}
const AsideContent = ({ isAdmin }: AsideProps) => {
  const url = "/dashboard/";

  return (
    <ul className={styles.list}>
      <li>
        <Link href={`${url}`}>
          <MdAccountCircle />
          Account
        </Link>
      </li>
      <li>
        <Link href={`${url}add`}>
          <FaSquarePlus />
          Add
        </Link>
      </li>
      <li>
        <Link href={`${url}my-profiles`}>
          <RiFileList3Fill />
          My profiles
        </Link>
      </li>
      <li>
        <Link href={`${url}settings`}>
          <IoMdSettings />
          Settings
        </Link>
      </li>
      <li>
        <Link href={`${url}whish-list`}>
          <BsFillBookmarkHeartFill />
          Whish list
        </Link>
      </li>

      {isAdmin && (
        <li>
          <Link href={`${url}admin`}>
            <MdPendingActions />
            Pending
          </Link>
        </li>
      )}

      <li>
        <Link href={""} onClick={() => signOut()}>
          <IoExit />
          Exit
        </Link>
      </li>
    </ul>
  );
};

export default AsideContent;
