// app/about/page.tsx
import React from "react";
import styles from "./page.module.css";
import {
  FaBirthdayCake,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiC,
  SiCplusplus,
  SiGo,
  SiDjango,
  SiDocker,
  SiJavascript,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiPython,
  SiTypescript,
  SiMysql,
} from "react-icons/si";

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>

      <section className={styles.timeline}>
        <h2 className={styles.sectionTitle}>My Journey</h2>
        <div className={styles.timelineItem}>
          <FaBirthdayCake className={styles.icon} />
          <div className={styles.timelineContent}>
            <h3>1997年</h3>
            <p>北海道で誕生</p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <FaGraduationCap className={styles.icon} />
          <div className={styles.timelineContent}>
            <h3>1997~2016年</h3>
            <p>
              地元で学生生活を送る。サッカーとラグビーをプレイし、高校時代にはラグビーで全国大会に出場。
            </p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <FaGraduationCap className={styles.icon} />
          <div className={styles.timelineContent}>
            <h3>2016~2020年</h3>
            <p>
              釧路の大学で経済学を学ぶ。読書に目覚め、多くの経済書を通じて視野を広げる。
            </p>
            <p className={styles.books}>
              印象に残った本：『有閑階級の理論』『世紀の空売り』『じゅうぶん豊かで、貧しい社会』『ゲーテとの対話』『ラゴスの旅』『走ることについて語るときに僕の語ること』
            </p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <FaBriefcase className={styles.icon} />
          <div className={styles.timelineContent}>
            <h3>2020~2022年</h3>
            <p>
              帯広で社会人としてのキャリアをスタート。コロナ禍の混乱の中、貴重な経験を積む。
            </p>
          </div>
        </div>
        <div className={styles.timelineItem}>
          <FaCode className={styles.icon} />
          <div className={styles.timelineContent}>
            <h3>2023~ 現在</h3>
            <p>
              42Tokyoで新たな挑戦。奇跡的な合格を経て、プログラミングの世界に入る。
            </p>
          </div>
        </div>
      </section>

      <section className={styles.learning}>
        <h2 className={styles.sectionTitle}>42Tokyoでの学び</h2>
        <ul className={styles.learningList}>
          <li>C言語とC++を使用し、低レイヤーの技術を習得</li>
          <li>Djangoを活用したWebサービス開発にも課題で取り組む</li>
          <li>基礎課程を修了し、現在は就職活動中</li>
          <li>
            今後はセキュリティやLinuxカーネルなど、より専門的な分野にチャレンジ予定
          </li>
          <li>
            42の仲間と共にSolanaのグローバルハッカソンに出場。開発と共にビジネスモデルの考案などにも取り組む。
          </li>
        </ul>
      </section>

      <section className={styles.skills}>
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        <div className={styles.skillGrid}>
          <div className={styles.skillCategory}>
            <h3>Languages</h3>
            <ul className={styles.skillList}>
              <li>
                <SiC /> C
              </li>
              <li>
                <SiCplusplus /> C++
              </li>
              <li>
                <SiGo /> Golang
              </li>
              <li>
                <SiPython /> Python
              </li>
              <li>
                <SiJavascript /> JavaScript
              </li>
              <li>
                <SiTypescript /> TypeScript
              </li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Frameworks</h3>
            <ul className={styles.skillList}>
              <li>
                <SiDjango /> Django
              </li>
              <li>
                <SiNextdotjs /> Next.js
              </li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Infrastructure</h3>
            <ul className={styles.skillList}>
              <li>
                <SiMysql /> Mysql
              </li>
              <li>
                <SiPostgresql /> PostgreSQL
              </li>
              <li>
                <SiDocker /> Docker
              </li>
              <li>
                <SiNginx /> Nginx
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
