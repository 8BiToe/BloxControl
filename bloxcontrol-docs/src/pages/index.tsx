import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures'; // Remove or comment out this line
import Heading from '@theme/Heading';

// Import your new Button component
import Button from '@site/src/components/Button';

import styles from './index.module.css'; // Ensure this file exists and contains .heroBanner, .buttons, .section and .grid

// Define your quick links data
const QuickLinksData = [
  {
    title: 'Promo Codes',
    link: 'https://8bitoe.github.io/bloxcontrol/docs/functions/promocodes', // External link
    backgroundImage: 'url(/home/discord.png)', // Make sure this image exists in static/img/
  },
  {
    title: 'Remote Config',
    link: 'https://8bitoe.github.io/bloxcontrol/docs/functions/remote-config', // External link
    backgroundImage: 'url(/home/discord.png)', // Make sure this image exists in static/img/
  },
  {
    title: 'Live Events',
    link: 'https://8bitoe.github.io/bloxcontrol/docs/functions/live-events', // External link
    backgroundImage: 'url(/home/discord.png)', // Make sure this image exists in static/img/
  },
  {
    title: 'Discord Support',
    link: 'https://dsc.gg/bitoe', // External link
    backgroundImage: 'url(/home/discord.png)', // Make sure this image exists in static/img/
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`} // Custom browser tab title
      description="BloxControl is a dynamic game management tool for Roblox experiences that allows developers to update game data without republishing their games.">
      <HomepageHeader />
      <main>
        {/* About Section */}
        <section className={clsx('padding-vert--lg', styles.section)}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <Heading as="h2">About</Heading>
                <p>BloxControl is a dynamic game management tool for Roblox experiences that allows developers to update game data without republishing their games.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className={clsx('padding-vert--lg', styles.section)}>
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <Heading as="h2">Quick Links</Heading>
                <div className={clsx('row', styles.quickLinksGrid)}>
                  {QuickLinksData.map((item, index) => (
                    <div key={index} className={clsx('col col--4', styles.quickLinkItem)}>
                      <Button
                        to={item.link}
                        href={item.link.startsWith('http') ? item.link : undefined} // Use href for external links
                        variant="cover"
                        style={{ backgroundImage: item.backgroundImage }} // Apply background image here
                      >
                        <Heading as="h3">{item.title}</Heading>
                        {/* You can add a short description here if needed */}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}