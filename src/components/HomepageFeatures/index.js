import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "立志做最易懂的教程",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        精心设计的视频教程
        <br />
        简洁易懂的语句
        <br />
        配合清晰动画
        <br />
        助您快速掌握知识。
      </>
    ),
  },
  {
    title: "立志做最全面的文档",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        条理详尽的文档内容
        <br />
        全面系统的知识点
        <br />
        配合丰富例程
        <br />
        助您全面理解知识。
      </>
    ),
  },
  {
    title: "立志做最好用的工具",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        专业现代的辅助工具
        <br />
        丰富可靠的功能
        <br />
        友好易用的界面
        <br />
        助您轻松完成工作。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className="flex flex-col items-center col col--4">
        <Svg className={styles.featureSvg} role="img" />
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
