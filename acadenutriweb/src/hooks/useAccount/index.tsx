import { useRouter } from 'next/router';
import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { apiClient, apiRoutes } from 'src/utils/axios/api';
import { getToken, logout, setToken } from 'src/utils/token';

// @ts-ignore
const AccountContext = createContext<Hooks.UseAccountContext>(null);

export const AccountProvider = (props: PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<Models.User>();
  const [service, setService] = useState<Models.UserService>();
  const { push } = useRouter();

  useEffect(() => {
    const load = async () => {
      const token = getToken();
      if (!token) return logout();
      setLoading(true);
      const res = await apiClient.get(apiRoutes.authRefreshToken);
      setToken(res.data.token);
      setUser(res.data.user);
      setService(res.data.service);
      setLoading(false);
    };
    load().catch(() => {
      logout();
      push('auth/signin');
    });
  }, []);

  const value = useMemo<Hooks.UseAccountContext>(() => {
    return {
      user,
      service,
      setUser,
      setService,
      loading,
    };
  }, [user, service, loading]);

  return <AccountContext.Provider value={value}>{props.children}</AccountContext.Provider>;
};

const useAccount = () => useContext(AccountContext);

export default useAccount;
