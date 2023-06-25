import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Add <code>velo-bind</code> to your site's packages and your'e all set.
        No configuration required.
      </>
    ),
  },
  {
    title: "Simplifies Velo APIs",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Work easily with repeaters, multistate box and other complex elements
        within the wix editor
      </>
    ),
  },
  {
    title: "Manage Your App State With Ease",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Based on the popular state management library{" "}
        <a href="https://mobx.js.org" target="_blank">
          mobx
        </a>
        . <code>velo-bind</code> lets you harness the power of declartive
        programing with ease.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.gettingStarted}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Getting Started
          </Link>
        </div>
      </div>
    </section>
  );
}
