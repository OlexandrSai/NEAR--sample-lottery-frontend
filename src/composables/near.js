import { ref, onMounted } from "vue";
import {wallet} from '@/services/near'
import {
    getOwner,
    getWinner,
    getPot,
    getFee,
    getFeeStrategy,
    getHasPlayed,
    getLastPlayed,
    getActive,
    getExplainFees,
    getExplainLottery,
    play,
    reset
  } from "../services/near";

  const FeeStrategies = ['Free','Constant','Linear','Exponential']
  const accountId = wallet.getAccountId();

  export const useLottery = () => {
      const  owner = ref('')
      const  winner = ref('')
      const  pot = ref('')
      const  fee = ref('')
      const  feeStrategy = ref('')
      const  hasPlayed = ref(null)
      const  lastPlayed = ref(null)
      const  active = ref(null)
      const  feesExplanation =  ref('')
      const  lotteryExplanation  = ref('')
      const err = ref(null);

      onMounted(async () => {
          try {
            updateValues()
          }
          catch (e) {
              err.value = e;
              console.log('error');
          }
      })

      const updateValues = async () => {
        owner.value = await getOwner()
        winner.value = await getWinner()
        pot.value = await getPot()
        fee.value = await getFee()
        feeStrategy.value = FeeStrategies[await getFeeStrategy()]
        hasPlayed.value = await getHasPlayed(accountId)
        lastPlayed.value = await getLastPlayed()
        active.value = await getActive()
        feesExplanation.value = await getExplainFees()
        lotteryExplanation.value = await getExplainLottery()
      }

      const handlePlay = async () => {
        fee.value = await getFee()
        hasPlayed.value = await getHasPlayed(accountId)
        await play(fee.value,hasPlayed.value);
      };

      const handleReset = async () => {
        reset();
      };

      return {
        owner,
        winner,
        pot,
        fee,
        feeStrategy,
        hasPlayed,
        lastPlayed,
        active,
        feesExplanation,
        lotteryExplanation,
        play:handlePlay,
        reset:handleReset
      };
  };