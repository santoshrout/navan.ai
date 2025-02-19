import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import ai_agents_hero_bg from "@site/static/img/home/hero-bg.webp";
import Program from "../components/Program";


import styles from './index.module.css';

const meta = {
  title: "AI Agents for Signal based Lead Generation | AI Deep Research Assistants | navan.ai",
  description:
    "Our AI deep research assistants hunt for real-world signals across the internet to find prospects with genuine buying intent.",

  keywords:
    "AI Agents, generative AI, Deep Research Assistants, navan ai, AI transformation, Digital Transformation",
};


export const HomepageHeader = () => {
  return (
    <>
      <div className={clsx("hero", styles.hero_bg)}>
        <div data-aos="fade-up" className={clsx("container")}>
          <div className={clsx("row", styles.container_sub)}>
            <div className={clsx("col col--6", styles.hero_content)}>
              <h1
                className={styles.hero_title_aiagents_black}
              >
                Uncover Hidden  {""}
                <span className={styles.hero_title_aiagents}>
                  Signals {""}
                </span>
              </h1>

              <p className={styles.hero_subtitle_aiagents}>
              AI-powered research that turns digital signals into high-intent leads.
              </p>
              <a
                style={{ color: "#fff" }}
                rel="alternate"
                href="https://app.navan.ai"
                hrefLang="en"
                target="_blank"
              >
                <button className={styles.signInVectorImgBtn_aiagents}>
                 Get Higher-converting leads
                </button>
              </a>
            </div>
            <div
              data-aos="zoom-in-up"
              className={clsx(
                "col col--6",
                styles.hero_video_container_aiagents
              )}
            >
              <img
                src={ai_agents_hero_bg}
                alt=""
                width=""
                height=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


/*
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}
  */



export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <Program />
    </Layout>
  );
}



/*
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
*/