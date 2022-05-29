import { useCallback, useEffect, useState } from 'react';
import { signIn, signOut, wallet } from '../services/near';

export const useSign = ({ setApiError }) => {
  const [accountId, setAccountId] = useState('');

  const getAccountId = useCallback(async () => {
    try {
      setAccountId(await wallet().getAccountId());
    } catch (error) {
      setApiError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getAccountId();
  }, [getAccountId]);

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
    getAccountId();
  };

  return {
    accountId,
    signIn: handleSignIn,
    signOut: handleSignOut,
  };
};
