import React from "react";
import {
  PrivacyFocused,
  StakeGhoul,
  Tokenomics,
  JoinCommunity,
  Seo,
} from "..";

export const Home = () => (
  <>
    <Seo title="Ghoul Ecosystem" />
    <PrivacyFocused />
    <Tokenomics />
    <StakeGhoul />
    <JoinCommunity />
  </>
);
