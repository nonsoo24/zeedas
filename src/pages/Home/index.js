import Badge from "assets/images/timeline/badge.png";
import Certificate from "assets/images/timeline/certificate.png";
import CodeWrangler from "assets/images/timeline/code-wrangler.png";
import OpenSource from "assets/images/timeline/open-source.png";
import SideProject from "assets/images/timeline/side-project.png";
import BriefCaseIcon from "assets/svg/BriefCaseIcon";
import GithubIcon from "assets/svg/GithubIcon";
import GraduationCap from "assets/svg/GraduationCap";
import TrophyIcon from "assets/svg/TrophyIcon";
import HeaderTitle from "components/shared-components/HeaderTitle";
import Timeline from "components/shared-components/Timeline";
import UserProfile from "components/shared-components/UserProfile.js";
import useDocumentTitle from "hooks/useDocumentTitle";
import React, { useMemo } from "react";
import "./Home.css";

const Home = () => {
  useDocumentTitle("Home");
  const timeLineList = useMemo(
    () => [
      {
        date: "19 Jan, 2023",
        title: "Obsidian",
        description:
          "Built a no-code analytics platform that adheres to the GDPR guidelines and can be easily setup by any business.",
        imageSource: SideProject,
        label: "Launched a side project",
        tagIcon: <BriefCaseIcon />,
        tagClass: "briefCase",
        variant: "briefCaseIcon",
        width: 502,
        height: 240,
      },
      {
        date: "17 Jan, 2023",
        title: "Udacity · Introduction to machine learning",
        description:
          "Completed the course and earned a certificate of excellence for finishing top five in the cohort with one of the highest grades.",
        imageSource: Certificate,
        label: "Earned a certificate",
        tagIcon: <GraduationCap />,
        tagClass: "turtle-green-background",
        variant: "turtle-green",
        width: 240,
        height: 240,
      },
      {
        date: "14 Jan, 2023",
        title: "Code review ninja",
        description: "Achieved 3,000 code review hours.",
        imageSource: Badge,
        label: "Earned a badge",
        tagIcon: <TrophyIcon />,
        tagClass: "royal-blue-background",
        variant: "royal-blue",
        width: 63.07,
        height: 72,
      },
      {
        date: "19 Dec 2022",
        title: "",
        description: "",
        imageSource: OpenSource,
        label: "Made an open source contribution",
        tagIcon: <GithubIcon />,
        tagClass: "cocoa-brown-background",
        variant: "cocoa-brown",
        width: 502,
        height: 251,
      },
      {
        date: "05 Nov 2022",
        title: "Code wrangler",
        description: "Milestone: written a 1,000,000 lines of code",
        imageSource: CodeWrangler,
        label: "Earned a badge",
        tagIcon: <TrophyIcon />,
        tagClass: "royal-blue-background",
        variant: "royal-blue",
        width: 74.92,
        height: 72,
      },
    ],
    [],
  );

  return (
    <div>
      <UserProfile showFollowButton />
      <section className="activity">
        <HeaderTitle title="Activity" items={[{ label: "Show: all", value: "all" }]} showDropdown />
        <Timeline items={timeLineList} />
      </section>
    </div>
  );
};

export default Home;
