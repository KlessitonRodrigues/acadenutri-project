declare namespace Forms {
  type SignIn = {
    email: string;
    password: string;
    rememberMe: boolean;
  };

  type SignUp = {
    email: string;
    name: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    complementary: string;
    company: string;
    function: string;
    cep: string;
    cpf: string;
    cnpj: string;
    password: string;
    confirmPassword: string;
    neighborhood: string;
  };

  type Service = {
    openDays?: number[];
    openHour?: string;
    closeHour?: string;
    elegibleDays?: number[];
    description?: string;
    openOnDay?: boolean;
  };

  type UserLinks = {
    facebook: string;
    instagram: string;
    linkedin: string;
    youtube: tring;
    website: string;
  };

  type TermOfService = {
    serviceTerms: boolean;
    authorizeTerms: boolean;
  };

  type VerifyCode = {
    code: string;
  };

  type Payment = {
    cardNumber: string;
    vality: string;
    CVV: string;
    name: string;
    phone: string;
    invoiceName: string;
    invoiceCpf: string;
    invoiceCnpj: string;
  };
}
