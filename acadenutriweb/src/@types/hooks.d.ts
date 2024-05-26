declare namespace Hooks {
  type UseTheme = {
    color: string;
    setColor: React.Dispatch<string>;
  };

  type UseAccountContext = {
    user: Models.User | undefined;
    service: Models.UserService | undefined;
    setUser: React.Dispatch<Models.Users>;
    setService: React.Dispatch<Models.UserService>;
    loading: boolean;
  };
}
