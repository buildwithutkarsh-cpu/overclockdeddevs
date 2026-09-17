import type { Metadata } from "next";

import "./proposal.css";

import ProposalNav from "./components/ProposalNav";
import ProposalHero from "./components/ProposalHero";
import IdeaSection from "./components/IdeaSection";
import ReachSection from "./components/ReachSection";
import EventsSection from "./components/EventsSection";
import AudienceSection from "./components/AudienceSection";
import WhyPartnerSection from "./components/WhyPartnerSection";
import OpportunitiesSection from "./components/OpportunitiesSection";
import BenefitsSection from "./components/BenefitsSection";
import TrackRecordSection from "./components/TrackRecordSection";
import StatementSection from "./components/StatementSection";
import FinalCTASection from "./components/FinalCTASection";
import ProposalFooter from "./components/ProposalFooter";
import ProposalEffects from "./components/ProposalEffects";

export const metadata: Metadata = {
  title: "Partner Proposal — OCd / OverclockedDevs",
  description:
    "Partner with OverclockedDevs — sponsorship deck for OCd hackathons across Delhi NCR.",
};

export default function ProposalPage() {
  return (
    <div className="proposal">
      <ProposalNav />

      <main>
        <ProposalHero />
        <IdeaSection />
        <ReachSection />
        <EventsSection />
        <AudienceSection />
        <WhyPartnerSection />
        <OpportunitiesSection />
        <BenefitsSection />
        <TrackRecordSection />
        <StatementSection />
        <FinalCTASection />
      </main>

      <ProposalFooter />

      <ProposalEffects />
    </div>
  );
}
