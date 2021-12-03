import React, { useState } from 'react';
import { Footer } from '../components/Footer';
import { Options } from '../components/Options';
import { PageTitle } from '../components/PageTitle';
import { wallet } from '../components/services/near';
import { Navigation } from '../components/Navigation';
import { useLottery } from '../components/hooks/useLottery';
import { DecorationDots } from '../components/decoration/DecorationDots';
import { DecorationLines } from '../components/decoration/DecorationLines';
import { DecorationCircleLg } from '../components/decoration/DecorationCircleLg';
import { DecorationCircleMd } from '../components/decoration/DecorationCircleMd';
import { DecorationCircleSm } from '../components/decoration/DecorationCircleSm';

export const Home = () => {
  const { owner, winner, pot, fee, feeStrategy, hasPlayed, lotteryExplanation, play, reset } = useLottery();
  const [accountId, setAccountId] = useState(wallet.getAccountId() ?? '');

  return (
    <>
      <DecorationDots />
      <DecorationLines />
      <DecorationCircleLg />
      <DecorationCircleMd />
      <DecorationCircleSm />

      <header>
        <Navigation accountId={accountId} setAccountId={setAccountId} />
        <PageTitle
          chance={lotteryExplanation}
          owner={owner}
          winner={winner}
          fee={fee}
          pot={pot}
          fee_strategy={feeStrategy}
          has_played={hasPlayed}
          play={play}
          reset={reset}
        />
        <Options owner={owner} accountId={accountId} />
      </header>

      <Footer />
    </>
  );
};
