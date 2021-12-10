import { wallet } from '../services/near';
import { useCallback, useEffect, useState } from 'react';
import { useContract } from '../context/ContractProvider';

export const useSign = ({ setApiError }) => {
  const { contractId } = useContract();

  const [accountId, setAccountId] = useState('');

  const getAccountId = useCallback(async () => {
    try {
      setAccountId(await wallet.getAccountId());
    } catch (error) {
      setApiError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAccountId();
  }, [getAccountId]);

  const handleSignIn = () => {
    wallet.requestSignIn({
      contractId: contractId,
      methodNames: [], // add methods names to restrict access
    });
  };

  const handleSignOut = () => {
    wallet.signOut();
    getAccountId();
  };

  return {
    accountId,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };
};
