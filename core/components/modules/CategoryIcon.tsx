import React from "react";
import Image from "next/image";

import CoupeIcon from "@/public/icon/coupe.svg";
import ConvertibleIcon from "@/public/icon/convertible.svg";

interface CategoryProps {
  item: string;
}

const CategoryIcon = ({ item }: CategoryProps) => {
  return (
    <div>
      <>
        {item === "COUPE" ? (
          <div
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={CoupeIcon} alt="coupe" width={40} height={60} />
          </div>
        ) : (
          <div
            style={{
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={ConvertibleIcon}
              alt={`${item} icon`}
              width={40}
              height={60}
            />
          </div>
        )}
      </>
    </div>
  );
};

export default CategoryIcon;
