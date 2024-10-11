// app/works/page.tsx
import React from "react";
import styles from "./page.module.css";
import {
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  // FaGithub,
  FaServer,
  FaWallet,
} from "react-icons/fa";

const projects = [
  {
    name: "ft_djoser",
    description: "DjangoプロジェクトのJWT認証を簡単に実装するためのライブラリ",
    link: "https://github.com/deerman31/ft_djoser",
    icon: <FaCode />,
  },
  {
    name: "PongDjango",
    description:
      "Djangoを使用して開発した古典的なPongゲームの現代的な再現したWebサービス",
    link: "https://github.com/deerman31/PongDjango",
    icon: <FaCode />,
  },
  {
    name: "BashLite",
    description: "C言語で実装した軽量でシンプルなbashインスパイアのシェル",
    link: "https://github.com/deerman31/BashLite",
    icon: <FaCode />,
  },
  {
    name: "NginxLite",
    description: "C++98で開発したNginxライクの高性能カスタムHTTPサーバー",
    link: "https://github.com/deerman31/NginxLite",
    icon: <FaServer />,
  },
  {
    name: "BlogNest",
    description:
      "Docker活用のNginx、MariaDB、WordPressによる小規模インフラプロジェクト",
    link: "https://github.com/deerman31/BlogNest",
    icon: <FaDatabase />,
  },
  {
    name: "Jin",
    description:
      "Solanaブロックチェーンを活用したNext.js製の革新的な返金保証サービス（ハッカソン作品,主にフロントエンドを担当）",
    link: "https://github.com/deerman31/Jin",
    icon: <FaWallet />,
  },
];

export default function WorksPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectHeader}>
              <div className={styles.projectIcon}>{project.icon}</div>
              <h2 className={styles.projectName}>{project.name}</h2>
            </div>
            <p className={styles.projectDescription}>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              <FaExternalLinkAlt /> View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
