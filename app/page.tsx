"use client";

import { FiHeart as HeartIcon } from "react-icons/fi";
import { GoPaperAirplane as ShareIcon } from "react-icons/go";
import { TbMessageCircle } from "react-icons/tb";
import Image from "next/image";
import { BlueprintLogo } from "@/assets/logos/BlueprintLogo";
import "@/styles/global.css";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.topBar}>
          <div className={styles.logo}>
            <BlueprintLogo />
          </div>
          <span className={styles.headerText}>
            <span className={styles.blueprint}>blueprint</span> volunteers
          </span>
        </div>

        <div className={styles.contentScroll}>
          <div className={styles.post}>
            <div className={styles.postHeader}>
              <div className={styles.avatar} />
              <div>
                <p className={styles.username}>
                  <strong>neha32</strong> at <strong>Mission Bit</strong>
                </p>
                <p className={styles.location}>San Francisco, CA</p>
              </div>
            </div>

            <Image
              src="https://cdn.britannica.com/51/178051-050-3B786A55/San-Francisco.jpg"
              width={346}
              height={231}
              className={styles.postImage}
              alt="SF Image"
            />

            <p className={styles.caption}>
              This past weekend, I taught at Mission Bit. I was working with a
              group of high school students who were building their first web
              pages. I really enjoyed being able to help guide 10 students on
              learning CS fundamentals through a project! They were all really
              eager to learn, and I&#39;m glad I signed up. Highly recommend to
              any other software engineers interested in volunteering! Sign-up
              here: https://missionbit.org/get-involved/volunteer-with-us/
            </p>
            <div className={styles.stats}>
              <span>3 Likes</span>
              <span>View 2 Comments</span>
            </div>
            <div className={styles.sendbutton}>
              <span>
                <div className={styles.buttons}>
                  <span>
                    <HeartIcon size={24} />
                  </span>
                  <span>
                    <TbMessageCircle size={24} />
                  </span>
                </div>
              </span>
              <span>
                <ShareIcon size={24} />
              </span>
            </div>

            <p className={styles.date}>February 1</p>
            <div className={styles.line} />

            <div className={styles.postHeader}>
              <div className={styles.avatar} />
              <div>
                <p className={styles.username}>
                  <strong>aiden_ugh</strong> at{" "}
                  <strong>Boys and Girls Club</strong>
                </p>
                <p className={styles.location}>San Francisco, CA</p>
              </div>
            </div>
            <p>I recently volunteered at my local Boys and Girls Club!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
