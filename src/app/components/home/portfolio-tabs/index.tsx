"use client";
import { Tabs } from "@heroui/react";
import HeroSection from "../hero-section";
import AboutMe from "../about-me";
import Experience from "../experience";
import FeaturedWork from "../featured-work";
import ProjectOverview from "../project-overview";

const GeneralTab = () => (
  <div className="flex flex-col">
    <HeroSection />
    <AboutMe />
  </div>
);

const ExperienceTab = () => <Experience />;

const CertificatesTab = () => (
  <section>
    <div className="container">
      <div className="border-x border-primary/10">
        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
          <p className="text-sm tracking-[2px] text-primary uppercase font-medium mb-6">
            Certificates
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-secondary">No certificates added yet.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProjectsTab = () => (
  <div className="flex flex-col">
    <FeaturedWork />
    <ProjectOverview />
  </div>
);

const AwardsTab = () => (
  <section>
    <div className="container">
      <div className="border-x border-primary/10">
        <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
          <p className="text-sm tracking-[2px] text-primary uppercase font-medium mb-6">
            Achievement &amp; Awards
          </p>
          <div className="flex flex-col gap-4">
            <p className="text-secondary">No achievements or awards added yet.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const PortfolioTabs = () => {
  return (
    <section>
      <div className="container">
        <Tabs aria-label="Portfolio sections">
          <Tabs.ListContainer>
            <Tabs.List
              aria-label="Portfolio navigation"
              className="flex-wrap gap-1 sm:gap-2 w-full max-w-3xl mx-auto border-b border-primary/10 bg-transparent"
            >
              <Tabs.Tab
                key="general"
                id="general"
                className="px-4 py-3 text-base font-medium text-secondary hover:text-primary data-[selected=true]:text-primary transition-colors duration-200"
              >
                <span className="relative">
                  General
                  <Tabs.Indicator className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-primary rounded-full" />
                </span>
              </Tabs.Tab>
              <Tabs.Tab
                key="experience"
                id="experience"
                className="px-4 py-3 text-base font-medium text-secondary hover:text-primary data-[selected=true]:text-primary transition-colors duration-200"
              >
                <span className="relative">
                  Work Experience
                  <Tabs.Indicator className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-primary rounded-full" />
                </span>
              </Tabs.Tab>
              <Tabs.Tab
                key="certificates"
                id="certificates"
                className="px-4 py-3 text-base font-medium text-secondary hover:text-primary data-[selected=true]:text-primary transition-colors duration-200"
              >
                <span className="relative">
                  Certificates
                  <Tabs.Indicator className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-primary rounded-full" />
                </span>
              </Tabs.Tab>
              <Tabs.Tab
                key="projects"
                id="projects"
                className="px-4 py-3 text-base font-medium text-secondary hover:text-primary data-[selected=true]:text-primary transition-colors duration-200"
              >
                <span className="relative">
                  Projects
                  <Tabs.Indicator className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-primary rounded-full" />
                </span>
              </Tabs.Tab>
              <Tabs.Tab
                key="awards"
                id="awards"
                className="px-4 py-3 text-base font-medium text-secondary hover:text-primary data-[selected=true]:text-primary transition-colors duration-200"
              >
                <span className="relative">
                  Achievement &amp; Awards
                  <Tabs.Indicator className="absolute -bottom-[13px] left-0 right-0 h-[2px] bg-primary rounded-full" />
                </span>
              </Tabs.Tab>
            </Tabs.List>
          </Tabs.ListContainer>

          <Tabs.Panel id="general" className="pt-6">
            <GeneralTab />
          </Tabs.Panel>
          <Tabs.Panel id="experience" className="pt-6">
            <ExperienceTab />
          </Tabs.Panel>
          <Tabs.Panel id="certificates" className="pt-6">
            <CertificatesTab />
          </Tabs.Panel>
          <Tabs.Panel id="projects" className="pt-6">
            <ProjectsTab />
          </Tabs.Panel>
          <Tabs.Panel id="awards" className="pt-6">
            <AwardsTab />
          </Tabs.Panel>
        </Tabs>
      </div>
    </section>
  );
};

export default PortfolioTabs;
