import React from "react";
import landcss from "./Landing.module.scss";
import BgVideo from "./../assets/home_video.mp4";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Links from "../components/Links";
const Landing = () => {
  const { t } = useTranslation();
  const body = t("home.body", { returnObjects: true });
  const members = t("home.team.members", { returnObjects: true });

  const aboutImage =
    "https://images.unsplash.com/photo-1722951812233-8fd37330dfb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlYWxzdGF0ZSUyMHJpeWFkaHxlbnwwfHwwfHx8MA%3D%3D";

  return (
    <>
      <section className={landcss.home}>
        <div className={landcss.home__mask}></div>
        <div className={landcss["home__video"]}>
          <video autoPlay muted loop playsInline>
            <source src={BgVideo} type="video/mp4" />
          </video>
        </div>

        <div className={landcss.home__content}>
          <div className={landcss.home__content__text}>
            <h1>{t("home.header")}</h1>
            <p>
              {body.map((b) => (
                <span key={b}>{b}. </span>
              ))}
            </p>
          </div>

          <div className={`${landcss.home__content__links}`}>
            <Links to={"/contact"} t={"primary"}>
              {t("home.nav.contact")}
            </Links>
            <Links t={"secondary"} to="/properties">
              {t("home.nav.properties")}
            </Links>
          </div>
        </div>
      </section>
      {/* about section */}
      <section className={landcss.about}>
        <div className={landcss.about__image}>
          <img src={aboutImage} alt="about image" />
        </div>

        <div className={landcss.about__content}>
          <div className={landcss.about__content_title}>
            <div></div>
            <span>{t("home.about.title")}</span>
          </div>

          <h2 className={landcss.about__content_subtitle}>
            {t("home.about.subtitle").split(" ")[0]}
            <br />
            <span>
              {t("home.about.subtitle").split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <div className={landcss.about__content_desc}>
            <p>{t("home.about.description1")}</p>
            <br />
            <p>{t("home.about.description2")}</p>
          </div>

          <hr />

          <div className={landcss.about__content_exper}>
            <div>
              <div>{t("home.about.stats.experience.value")}</div>
              <div>{t("home.about.stats.experience.label")}</div>
            </div>

            <div>
              <div>{t("home.about.stats.clients.value")}</div>
              <div>{t("home.about.stats.clients.label")}</div>
            </div>

            <div>
              <div>{t("home.about.stats.properties.value")}</div>
              <div>{t("home.about.stats.properties.label")}</div>
            </div>

            <div>
              <div>{t("home.about.stats.location.value")}</div>
              <div>{t("home.about.stats.location.label")}</div>
            </div>
          </div>
        </div>
      </section>
      {/* home.team section */}

      <section className={landcss.team}>
        <h2>
          <span></span>
          {t("home.team.title")}
          <span></span>
        </h2>
        <h3>{t("home.team.subtitle")}</h3>
        <p>{t("home.team.description")}</p>

        <div className={landcss.team__card}>
          {members.map((member, index) => (
            <div key={index}>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
              <p>{member.bio}</p>
              <span>{member.phone}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Landing;
