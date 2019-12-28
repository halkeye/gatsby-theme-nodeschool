import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useTranslation } from "react-i18next";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Events from "../components/events";
import FollowTwitter from "../components/follow-twitter";
import Community from "../components/community";
import Sponsors from "../components/sponsors";
import Attendees from "../components/attendees";
import Mentors from "../components/mentors";
import Photos from "../components/photos";
import NodeSchoolChapterLogo from "../components/NodeSchoolChapterLogo";
import EventFooter from "../components/events/footer";

const IndexPage = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          twitter
          github
          meetupGroup
          mailchimpSubscribeUrl
          credits {
            logo {
              name
              url
            }
          }
        }
      }
      schoolhouseImage: file(relativePath: { eq: "schoolhouse-beige.svg" }) {
        extension
        publicURL
      }
    }
  `);
  return (
    <Layout noWrapper>
      <SEO title="Home" />

      <main className="main cf">
        <section className="panel text">
          <div className="container">
            <NodeSchoolChapterLogo />
            <Community />
            <FollowTwitter />

            <div className="mailinglist">
              <h3>{t(`Get Notified`)}</h3>

              <p>
                {t(`Make sure you know what's going on within the community and whenever we're having an event by signing up to our mailing list below`)}:
              </p>

              <form
                action={data.site.siteMetadata.mailchimpSubscribeUrl}
                method="post"
                target="_blank"
              >
                <label className="firstname">
                  <span>{t(`First Name`)}</span>
                  <input type="text" name="FNAME" className="" />
                </label>
                <label className="lastname">
                  <span>{t(`Last Name`)}</span>
                  <input type="text" name="LNAME" className="" />
                </label>
                <label className="email">
                  <span>{t(`Email Address`)}</span>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                  />
                </label>
                <input type="submit" value={t(`Subscribe`)} name="subscribe" />
              </form>
            </div>

            <h2 id="events">{t(`Events`)}</h2>
            <p>
              <strong>{data.site.siteMetadata.title}</strong>
              {` `}
              {t(`events are run by an enthusiastic group of volunteers`)}.
              {` `}
              {t(`The workshops will be held monthly and will always be free`)}.
            </p>
            <p>
              {t(`The events offer a low-key environment to learn or practice Node and are generally three hours long`)}.
            </p>

            <h2 id="faq">{t(`Frequently Asked Questions`)}</h2>

            <h3>&quot;{t(`What should I expect?`)}&quot;</h3>
            <p>
              {t(`NodeSchool is a self-directed learning environment, where you bring your own laptop to learn`)}. 
              {` `}
              {t(`The intention is for attendees to work on the Node workshops from`)}
              {` `}
              <a 
                rel="noopener noreferrer"
                target="_blank"
                href="http://nodeschool.io/#workshopper-list"
                >nodeschool.io</a
              >. 
              {` `}
              {t(`But if you have a personal project you are working on, do it!`)} 
              {` `}
              {t(`The goal of NodeSchool is to help people explore and learn Node`)}. 
              {` `}
              {t(`There will be mentors on hand at the events to help you when you hit any road blocks`)}.
            </p>

            <h3>&quot;{t(`How do I install Node?`)} &quot;</h3>
            <p>
              {/* FIXME - this is recommended for mac doesn't work elsewhere */}
              {t(`Our recommended way to install Node is through something called`)}
              &quot;Homebrew&quot;.
            </p>
            <p className="indent">
              <strong>1.</strong>
              {` `}
              {t(`Install Homebrew by copying the following command into a terminal/bash prompt`)}:
            </p>
            <code className="terminal"><pre>
$ ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;
            </pre></code>
            <p className="indent">
              <strong>2.</strong> {t(`Once installed, run`)}
              <code>brew install node</code> 
              {t(`which should install the latest version of Node`)}.
            </p>
            <p>
              {t(`If you have any issues installing either Homebrew or Node no worries`)}. 
              {` `}
              {t(`We'll do our best to help you get set up once you arrive at an event`)}.
            </p>

            <h3>&quot;{t(`What is a Workshopper?`)}&quot;</h3>
            <p>
              {t(`Workshopper is the name used for the open source lesson modules associated with NodeSchool`)}. 
              {` `}
              {t(`All are self guided (you don't need to attend a workshop to do one) and most work offline`)}.
            </p>

            <h3>&quot;{t(`How do I run a Workshopper?`)}&quot;</h3>
            <p>
              {t(`To get started with a Workshopper tutorial you'll have to install and then run that program in terminal/bash`)}. 
              {` `}
              {t(`Here's an example of how to install and run the Beginner Node Workshopper`)}:
            </p>
            <code className="terminal">
              <pre>$ npm install -g learnyounode</pre>
              <pre>$ learnyounode</pre>
            </code>

            <Photos />

            <h2 id="codeofconduct">{t(`Code of Conduct`)}</h2>

            <p>
              {t(`We, the organizers of`)} <strong>{data.site.siteMetadata.title}</strong>,
              {` `}
              {t(`are dedicated to providing a harassment-free community for everyone, regardless of sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs`)}. 
              {` `}
              {t(`We do not tolerate harassment of community members in any form`)}.
              {` `}
              {t(`Participants violating these rules may be sanctioned or expelled from the community at the discretion of the organizers of`)}
              {` `}
              <strong>{data.site.siteMetadata.title}</strong>.
            </p>

            <p>
              {t(`Harassment includes offensive verbal or written comments related to sex, gender identity or expression, sexual orientation, disability, physical appearance, age, body size, race, nationality, or religious beliefs, deliberate intimidation, threats, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention`)}.
              {` `}
              {t(`Sexual language and imagery is not appropriate for any events at`)}
              {` `}
              <strong>{data.site.siteMetadata.title}</strong>
              {` `}
              {t(`meetups or in any related communication channels`)}.
              {` `}
              {t(`Community members asked to stop any harassing behavior are expected to comply immediately`)}.
              {` `}
              {t(`Sponsors and presenters are also subject to the anti-harassment policy`)}.
            </p>

            <p>
              {t(`If a community member engages in harassing behavior, the organizers of`)}
              {` `}
              <strong>{data.site.siteMetadata.title}</strong>
              {` `}
              {t(`may take any action they deem appropriate, including warning the offender or expulsion from the community`)}.
              {` `}
              {t(`If you are being harassed, notice that someone else is being harassed, or have any concerns, please contact an organizer immediately`)}.
            </p>

            <div className="footer">
              <h2 id="credit">{t(`Credits`)}</h2>

              <p className="credit">
                {t(`credit-The`)} {data.site.siteMetadata.title} {t(`Hex Logo was kindly designed by`)} <a
                  href={data.site.siteMetadata.credits.logo.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >{data.site.siteMetadata.credits.logo.name}</a>.
              </p>

              <p className="links">
                {data.site.siteMetadata.meetupGroup && (
                  <>
                    <a
                    href={`https://www.meetup.com/${data.site.siteMetadata.meetupGroup}`}
                    title={`${data.site.siteMetadata.title} ${t(`Event`)}`}
                      >{t(`Events`)}</a>
                  <span className="divider">|</span>
                </>)}

                <a
                  href={`https://twitter.com/${data.site.siteMetadata.twitter}`}
                  title={`${data.site.siteMetadata.title} Twitter`}
                  >Twitter</a>
                <span className="divider">|</span>
                <a
                  href={`https://github.com/${data.site.siteMetadata.github}`}
                  title={`${data.site.siteMetadata.title} GitHub`}
                  >GitHub</a>
                <span className="divider">|</span>
                <a href="http://nodeschool.io/" title="NodeSchool"
                  >NodeSchool.io</a>
              </p>
            </div>
          </div>
        </section>

        <aside className="panel side">
          <div className="container">
            <div className="inner">
              {/* nodeschool.io info */}

              <a className="logo" href="http://nodeschool.io">
                <img src={data.schoolhouseImage.publicURL} alt={data.site.siteMetadata.title} />
                <p className="about">
                  <strong>NodeSchool</strong>
                  {` `}
                  {t(`is a selection of open source workshops that teach web software skills`)}.
                  {` `}
                  {t(`You can do them on your own or at one of the monthly`)}
                  {` `}
                  <strong>{data.site.siteMetadata.title}</strong> {t(`events`)}.
                </p>
              </a>

              {/* event badge */}

              <div className="event">
                <Events />
                <EventFooter />
              </div>


              <Mentors />
              <Attendees />
              <Sponsors />
            </div>

          </div>
        </aside>
      </main>
    </Layout>
  );
};

export default IndexPage;
