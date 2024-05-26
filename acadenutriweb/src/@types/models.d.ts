namespace Models {
  type User = {
    name: string;
    email: string;
    company: string;
    function: string;
    address: string;
    city: string;
    state: string;
    neighborhood: string;
    cpf: string;
    cnpj: string;
    phone: string;
    serviceId?: string;
    userLinks?: UserLinks;
    createdAt: Date;
  };

  type UserLinks = {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    website?: string;
  };

  type UserService = {
    openDays: number[];
    openHour: string;
    closeHour: string;
    elegibleDays: number[];
    description?: string;
    createdAt: Date;
  };
}
