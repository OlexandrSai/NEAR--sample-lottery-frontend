import { ref, onMounted } from "vue";
import {
    getOwner,
    getWinner,
    getPot,
    getFee,
    getFeeStrategy,
    //getHasPlayed,
    getLastPlayed,
    getActive,
    getExplainFees,
    getExplainLottery
  } from "../services/near";

  const FeeStrategies = ['Free','Constant','Linear','Exponential']

  export const useLottery = () => {
      const  owner = ref('')
      const  winner = ref('')
      const  pot = ref('')
      const  fee = ref('')
      const  feeStrategy = ref('')
      //const  hasPlayed = ref(null)
      const  lastPlayed = ref(null)
      const  active = ref(null)
      const  feesExplanation =  ref('')
      const  lotteryExplanation  = ref('')
      const err = ref(null);

      onMounted(async () => {
          try {
              owner.value = await getOwner()
              winner.value = await getWinner()
              pot.value = await getPot()
              fee.value = await getFee()
              feeStrategy.value = FeeStrategies[await getFeeStrategy()]
              //hasPlayed.value = await getHasPlayed()
              lastPlayed.value = await getLastPlayed()
              active.value = await getActive()
              feesExplanation.value = await getExplainFees()
              lotteryExplanation.value = await getExplainLottery()
          }
          catch (e) {
              err.value = e;
              console.log('error');
          }
      })

    //   const handleSendMessage = async ({message,anonymous,attachedDeposit}) => {
    //       sendMessage({message,anonymous,attachedDeposit});
    //   };

    //   const handleTransfer = async  () => {
    //       transfer();
    //   }

      return {
        owner,
        winner,
        pot,
        fee,
        feeStrategy,
        //hasPlayed,
        lastPlayed,
        active,
        feesExplanation,
        lotteryExplanation,
        // sendMessage:handleSendMessage,
        // transferFunds:handleTransfer
      };
  };