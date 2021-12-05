import React, { useState } from 'react';
import { wallet } from '../services/near';
import { Footer } from '../components/Footer';
import { useLottery } from '../hooks/useLottery';
import { PageTitle } from '../components/PageTitle';
import { Navigation } from '../components/Navigation';
import { useContract } from '../context/ContractProvider';
import { DecorationDots } from '../components/decoration/DecorationDots';
import { DecorationLines } from '../components/decoration/DecorationLines';
import { DecorationCircleLg } from '../components/decoration/DecorationCircleLg';
import { DecorationCircleMd } from '../components/decoration/DecorationCircleMd';
import { DecorationCircleSm } from '../components/decoration/DecorationCircleSm';

export const Home = () => {
  const { contractId } = useContract();

  const [apiError, setApiError] = useState('');

  const { owner, winner, pot, fee, feeStrategy, hasPlayed, lotteryExplanation, play, reset } = useLottery({
    contractId,
    apiError,
    setApiError,
  });

  const [accountId, setAccountId] = useState(wallet.getAccountId() ?? '');

  const chance = lotteryExplanation === '' ? lotteryExplanation : lotteryExplanation.match(/(\d+)/)[0] + '%';

  return (
    <>
      <DecorationDots />
      <DecorationLines />
      <DecorationCircleLg />
      <DecorationCircleMd />
      <DecorationCircleSm />

      <header>
        <Navigation accountId={accountId} setAccountId={setAccountId} apiError={apiError} setApiError={setApiError} />
        <PageTitle
          chance={chance}
          owner={owner}
          winner={winner}
          fee={fee}
          pot={pot}
          fee_strategy={feeStrategy}
          has_played={hasPlayed}
          play={play}
          reset={reset}
        />
        {/* {accountId && owner === accountId ? <Options chance={chance} fee={fee} /> : null} */}
      </header>

      <Footer />
    </>
  );
};
