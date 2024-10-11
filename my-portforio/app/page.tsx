// app/page.tsx
import React from "react";
import styles from "./page.module.css";
import {
  FaBirthdayCake,
  FaBook,
  FaCode,
  //FaFileAlt,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
//import { SiZenn } from 'react-icons/si';

export default function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <section className={styles.introduction}>
          <h1>ようこそ、ykusanoです</h1>
          <ul className={styles.bioList}>
            <li>
              <FaBirthdayCake size={24} /> 1997年生まれ
            </li>
            <li>
              <FaMapMarkerAlt size={24} /> 北海道出身
            </li>
            <li>
              <FaGraduationCap size={24} />{" "}
              2023年にひょんなことから、学び直しのために42Tokyoに入学
            </li>
            <li>
              <FaCode size={24} />{" "}
              バックエンドを集中的に学び、専門はバックエンド。最近はフロントエンドまで領域を広げています
            </li>
            <li>
              <FaBook size={24} />{" "}
              趣味は読書。最近のお気に入りは『月は無慈悲な夜の女王』
            </li>
          </ul>
        </section>

        <section className={styles.socialLinks}>
          <h2>SNSでつながりましょう</h2>
          <div className={styles.linkContainer}>
            <a
              href="https://github.com/deerman31"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaGithub size={20} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yoshinari-kusano-bba5b1332/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            {
              /* <a href="https://note.com/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaFileAlt size={20} /> note
            </a>
            <a href="https://zenn.dev/yourusername" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <SiZenn size={20} /> Zenn
            </a> */
            }
          </div>
        </section>
      </div>
    </div>
  );
}
