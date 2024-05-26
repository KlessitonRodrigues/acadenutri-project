export const accountForm: Forms.SignUp = {
  name: '',
  phone: '',
  email: '',
  address: '',
  city: '',
  state: '',
  complementary: '',
  cep: '',
  cnpj: '',
  cpf: '',
  company: '',
  function: '',
  password: '',
  confirmPassword: '',
  neighborhood: '',
};

export const serviceForm: Forms.Service = {
  closeHour: '08:00',
  openHour: '08:00',
  elegibleDays: [],
  openDays: [],
  openOnDay: false,
  description: '',
};

export const linksForm: Forms.UserLinks = {
  facebook: '',
  instagram: '',
  linkedin: '',
  youtube: '',
  website: '',
};

export const termsForm: Forms.TermOfService = {
  authorizeTerms: false,
  serviceTerms: false,
};

export const verifyCodeForm: Forms.VerifyCode = {
  code: '',
};

export const paymentForm: Forms.Payment = {
  cardNumber: '',
  vality: '',
  CVV: '',
  name: '',
  phone: '',
  invoiceName: '',
  invoiceCpf: '',
  invoiceCnpj: '',
};
