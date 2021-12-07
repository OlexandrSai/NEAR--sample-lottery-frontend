import { ref } from "vue";

  export const useContractProvider = () => {
      const defaultContractId  = ref(process.env.VUE_APP_CONTRACT_ID)
      const contractId = ref(localStorage.getItem('CONTRACT_ID'))
      const isChangeContractIdFormOpened= ref(false)
      !contractId.value && localStorage.setItem('CONTRACT_ID', defaultContractId.value);
      contractId.value = ref(contractId.value ?? defaultContractId.value)

      const handleSetContractId = (Id) => {
        localStorage.setItem('CONTRACT_ID', Id);
        contractId.value = Id;
      };

      const handleSetDefaultContractId = () => {
        localStorage.setItem('CONTRACT_ID', defaultContractId.value);
        contractId.value = ref(localStorage.getItem('CONTRACT_ID'))
      };

      return {
        defaultContractId,
        contractId,
        isChangeContractIdFormOpened,
        setContractId: handleSetContractId,
        setDefaultContractId:handleSetDefaultContractId
      };
  };