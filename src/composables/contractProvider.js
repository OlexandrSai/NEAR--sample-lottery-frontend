import { ref } from "vue";

  //const accountId = wallet.getAccountId();

  export const useContractProvider = () => {
      const  defaultContractId  = ref(process.env.VUE_APP_CONTRACT_ID)
      const contractId = ref(localStorage.getItem('CONTRACT_ID'))
      const isChangeContractIdFormOpened= ref(false)
      !contractId.value && localStorage.setItem('CONTRACT_ID', defaultContractId.value);
      contractId.value = ref(contractId.value ?? defaultContractId.value)

      const handleSetContractId = (contractId) => {
        localStorage.setItem('CONTRACT_ID', contractId);
        contractId.value(contractId);
      };

      return {
        contractId,
        isChangeContractIdFormOpened,
        setContractId: handleSetContractId
      };
  };