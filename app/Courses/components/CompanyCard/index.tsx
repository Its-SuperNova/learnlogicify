import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";

interface Props {
  title: string;
  desc: string;
  offer: string;
  price: string;
  originalPrice: string;
  bannerColor: string;
  desktopImage: JSX.Element;
  mobileImage: JSX.Element;
}

const CompanyCard: React.FC<Props> = ({
  title,
  desc,
  offer,
  price,
  originalPrice,
  bannerColor,
  desktopImage,
  mobileImage,
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 700px) and (max-width: 890px)",
  });
  const isTab = useMediaQuery({
    query: "(min-width: 1195px) and (max-width: 1420px)",
  });
  const isBigScreen = useMediaQuery({
    query: "(max-width: 1951px) and (min-width:1525px)",
  });
  return (
    <div className={styles.card} style={{ backgroundColor: bannerColor }}>
      <div className={styles.left}>
        <div className={styles.header}>
          <p>{title}</p>
        </div>
        <div className={styles.desc}>
          <p>{desc}</p>
        </div>
        <div className={styles.content}>
          <div>
            <Link href="/">
              <div className={styles.btn}>Buy</div>
            </Link>
          </div>
          <div>
            <div className={styles.offer}>{offer}</div>
            <div className={styles.price}>
              <div className={styles.offprice}>{price}</div>
              <div className={styles.originalPrice}>
                <s>{originalPrice}</s>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        {isMobile || isTablet || isTab || isBigScreen? mobileImage : desktopImage}
      </div>
    </div>
  );
};

export default CompanyCard;
