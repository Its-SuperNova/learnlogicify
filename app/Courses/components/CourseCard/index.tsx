import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { IconType } from "react-icons";
import { MdSlowMotionVideo } from "react-icons/md";
import { FaRegRectangleList } from "react-icons/fa6";

interface Props {
  url: string;
  Level: string;
  icon: IconType;
  title: string;
  topics: number;
  videos: number;
  desc: string;
  offer: string;
  price: string;
  originalPrice: string;
  bannerColor: string;
  available: boolean;
}

const Card = (props: Props) => {
  const {
    url,
    Level,
    icon: Icon,
    title,
    topics,
    videos,
    desc,
    offer,
    price,
    originalPrice,
    bannerColor,
    available,
  } = props;

  return (
    <div className={styles.card}>
      <div className={styles.banner} style={{ backgroundColor: bannerColor }}>
        <div className={styles.Header}>
          <div>
            <div className={styles.level}>
              <p>{Level}</p>
            </div>
          </div>
          <div className={styles.icon}>
            <Icon size={25} />
          </div>
        </div>
        <div className={styles.Title}>{title}</div>
        <div className={styles.Stats}>
          <div className={styles.topics}>
            <div>
              <FaRegRectangleList size={14} />
            </div>
            <div>{topics} Topics</div>
          </div>
          <div className={styles.line}>|</div>
          <div className={styles.topics}>
            <div>
              <MdSlowMotionVideo size={15} />
            </div>
            <div>{videos} videos</div>
          </div>
        </div>
        <div className={styles.Desc}>{desc}</div>
      </div>
      <div className={styles.content}>
        {available ? (
          <>
            <div>
              <div className={styles.offer}>{offer}</div>
              <div className={styles.price}>
                <div className={styles.offprice}>{price}</div>
                <div className={styles.originalPrice}>
                  <s>{originalPrice}</s>
                </div>
              </div>
            </div>
            <div>
              <Link href="/">
                <div className={styles.btn}>Buy</div>
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.comingSoonBtn}>Coming Soon</div>
        )}
      </div>
      {available && (
        <Link href={`${url}`}>
          <div className={styles.overlayLink}></div>
        </Link>
      )}
    </div>
  );
};

export default Card;
