import React from 'react';
import { Footer } from '../components/Footer';
import { Options } from '../components/Options';
import { PageTitle } from '../components/PageTitle';
import { Navigation } from '../components/Navigation';
import { DecorationDots } from '../components/decoration/DecorationDots';
import { DecorationLines } from '../components/decoration/DecorationLines';
import { DecorationCircleLg } from '../components/decoration/DecorationCircleLg';
import { DecorationCircleMd } from '../components/decoration/DecorationCircleMd';
import { DecorationCircleSm } from '../components/decoration/DecorationCircleSm';

export const Home = () => {
  return (
    <>
      <DecorationDots />
      <DecorationLines />
      <DecorationCircleLg />
      <DecorationCircleMd />
      <DecorationCircleSm />

      <header>
        <Navigation />
        <PageTitle
          chance="lotteryExplanation"
          owner="owner"
          winner="winner"
          fee="fee"
          pot="pot"
          fee_strategy="feeStrategy"
          has_played="hasPlayed"
          play="play"
          reset="reset"
        />
        <Options owner="owner" accountId="accountId" />
      </header>

      <Footer />
    </>
  );
};
