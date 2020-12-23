import colors from "./colors";

const genders = [
  { value: "male", label: "Masculino" },
  { value: "female", label: "Feminino" },
  { value: "other", label: "Outro" },
];

const paymentMethods: any = [
  { value: "creditCard", label: "Cartão de crédito" },
  { value: "bankSlip", label: "Boleto bancário" },
];

const months = [
  { value: "01", label: "01" },
  { value: "02", label: "02" },
  { value: "03", label: "03" },
  { value: "04", label: "04" },
  { value: "05", label: "05" },
  { value: "06", label: "06" },
  { value: "07", label: "07" },
  { value: "08", label: "08" },
  { value: "09", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
];

const states = [
  { value: "AC", label: "Acre" },
  { value: "AL", label: "Alagoas" },
  { value: "AP", label: "Amapá" },
  { value: "AM", label: "Amazonas" },
  { value: "BA", label: "Bahia" },
  { value: "CE", label: "Ceará" },
  { value: "DF", label: "Distrito Federal" },
  { value: "ES", label: "Espírito Santo" },
  { value: "GO", label: "Goiás" },
  { value: "MA", label: "Maranhão" },
  { value: "MG", label: "Minas Gerais" },
  { value: "MT", label: "Mato Grosso" },
  { value: "MS", label: "Mato Grosso do Sul" },
  { value: "PA", label: "Pará" },
  { value: "PB", label: "Paraíba" },
  { value: "PR", label: "Paraná" },
  { value: "PE", label: "Pernambuco" },
  { value: "PI", label: "Piauí" },
  { value: "RJ", label: "Rio de Janeiro" },
  { value: "RN", label: "Rio Grande do Norte" },
  { value: "RS", label: "Rio Grande do Sul" },
  { value: "RO", label: "Rondônia" },
  { value: "RR", label: "Roraima" },
  { value: "SC", label: "Santa Catarina" },
  { value: "SP", label: "São Paulo" },
  { value: "SE", label: "Sergipe" },
  { value: "TO", label: "Tocantins" },
  { value: "EX", label: "Estrangeiro" },
];

const bankCodes = [
  { value: "000", label: "000 - Banco Bankpar S.A." },
  { value: "001", label: "001 - Banco do Brasil S.A." },
  { value: "003", label: "003 - Banco da Amazônia S.A." },
  { value: "004", label: "004 - Banco do Nordeste do Brasil S.A." },
  {
    value: "021",
    label: "021 - BANESTES S.A. Banco do Estado do Espírito Santo",
  },
  { value: "024", label: "024 - Banco de Pernambuco S.A. – BANDEPE" },
  { value: "025", label: "025 - Banco Alfa S.A." },
  { value: "029", label: "029 - Banco Banerj S.A." },
  { value: "031", label: "031 - Banco Beg S.A." },
  { value: "033", label: "033 - Banco Santander (Brasil) S.A." },
  { value: "036", label: "036 - Banco Bradesco BBI S.A." },
  { value: "037", label: "037 - Banco do Estado do Pará S.A." },
  { value: "038", label: "038 - Banco Banestado S.A." },
  { value: "040", label: "040 - Banco Cargill S.A." },
  { value: "041", label: "041 - Banco do Estado do Rio Grande do Sul S.A." },
  { value: "044", label: "044 - Banco BVA S.A." },
  { value: "045", label: "045 - Banco Opportunity S.A." },
  { value: "047", label: "047 - Banco do Estado de Sergipe S.A." },
  { value: "062", label: "062 - Hipercard Banco Múltiplo S.A." },
  { value: "063", label: "063 - Banco Ibi S.A. Banco Múltiplo" },
  { value: "065", label: "065 - Banco Lemon S.A." },
  { value: "069", label: "069 - BPN Brasil Banco Múltiplo S.A." },
  { value: "070", label: "070 - BRB – Banco de Brasília S.A." },
  { value: "072", label: "072 - Banco Rural Mais S.A." },
  { value: "073", label: "073 - BB Banco Popular do Brasil S.A." },
  { value: "074", label: "074 - Banco J. Safra S.A." },
  {
    value: "078",
    label: "078 - BES Investimento do Brasil S.A.-Banco de Investimento",
  },
  { value: "081-7", label: "081-7 - Concórdia Banco S.A." },
  { value: "082-5", label: "082-5 - Banco Topázio S.A." },
  { value: "083-3", label: "083-3 - Banco da China Brasil S.A." },
  {
    value: "096",
    label: "096 - Banco BM&F de Serviços de Liquidação e Custódia S.A",
  },
  { value: "104", label: "104 - Caixa Econômica Federal" },
  { value: "107", label: "107 - Banco BBM S.A." },
  { value: "151", label: "151 - Banco Nossa Caixa S.A." },
  { value: "184", label: "184 - Banco Itaú BBA S.A." },
  { value: "204", label: "204 - Banco Bradesco Cartões S.A." },
  { value: "208", label: "208 - Banco UBS Pactual S.A." },
  { value: "214", label: "214 - Banco Dibens S.A." },
  {
    value: "215",
    label: "215 - Banco Comercial e de Investimento Sudameris S.A.",
  },
  { value: "217", label: "217 - Banco John Deere S.A." },
  { value: "222", label: "222 - Banco Calyon Brasil S.A." },
  { value: "224", label: "224 - Banco Fibra S.A." },
  { value: "225", label: "225 - Banco Brascan S.A." },
  { value: "229", label: "229 - Banco Cruzeiro do Sul S.A." },
  { value: "230", label: "230 - Unicard Banco Múltiplo S.A." },
  { value: "233", label: "233 - Banco GE Capital S.A." },
  { value: "237", label: "237 - Banco Bradesco S.A." },
  { value: "246", label: "246 - Banco ABC Brasil S.A." },
  { value: "248", label: "248 - Banco Boavista Interatlântico S.A." },
  { value: "249", label: "249 - Banco Investcred Unibanco S.A." },
  { value: "250", label: "250 - Banco Schahin S.A." },
  { value: "263", label: "263 - Banco Cacique S.A." },
  { value: "265", label: "265 - Banco Fator S.A." },
  { value: "318", label: "318 - Banco BMG S.A." },
  { value: "320", label: "320 - Banco Industrial e Comercial S.A." },
  { value: "341", label: "341 - Banco Itaú S.A." },
  { value: "356", label: "356 - Banco Real S.A. (antigo)" },
  { value: "366", label: "366 - Banco Société Générale Brasil S.A." },
  { value: "370", label: "370 - Banco WestLB do Brasil S.A." },
  { value: "376", label: "376 - Banco J. P. Morgan S.A." },
  { value: "389", label: "389 - Banco Mercantil do Brasil S.A." },
  { value: "394", label: "394 - Banco Finasa BMC S.A." },
  { value: "399", label: "399 - HSBC Bank Brasil S.A. – Banco Múltiplo" },
  { value: "409", label: "409 - UNIBANCO – União de Bancos Brasileiros S.A." },
  { value: "422", label: "422 - Banco Safra S.A." },
  { value: "453", label: "453 - Banco Rural S.A." },
  { value: "456", label: "456 - Banco de Tokyo-Mitsubishi UFJ Brasil S.A." },
  { value: "464", label: "464 - Banco Sumitomo Mitsui Brasileiro S.A." },
  { value: "473", label: "473 - Banco Caixa Geral – Brasil S.A." },
  { value: "477", label: "477 - Citibank N.A." },
  { value: "479", label: "479 - Banco ItaúBank S.A" },
  { value: "487", label: "487 - Deutsche Bank S.A. – Banco Alemão" },
  { value: "488", label: "488 - JPMorgan Chase Bank" },
  { value: "492", label: "492 - ING Bank N.V." },
  { value: "505", label: "505 - Banco Credit Suisse (Brasil) S.A." },
  { value: "600", label: "600 - Banco Luso Brasileiro S.A." },
  { value: "604", label: "604 - Banco Industrial do Brasil S.A." },
  { value: "610", label: "610 - Banco VR S.A." },
  { value: "611", label: "611 - Banco Paulista S.A." },
  { value: "612", label: "612 - Banco Guanabara S.A." },
  { value: "623", label: "623 - Banco Panamericano S.A." },
  { value: "626", label: "626 - Banco Ficsa S.A." },
  { value: "630", label: "630 - Banco Intercap S.A." },
  { value: "633", label: "633 - Banco Rendimento S.A." },
  { value: "634", label: "634 - Banco Triângulo S.A." },
  { value: "637", label: "637 - Banco Sofisa S.A." },
  { value: "638", label: "638 - Banco Prosper S.A." },
  { value: "641", label: "641 - Banco Alvorada S.A." },
  { value: "643", label: "643 - Banco Pine S.A." },
  { value: "652", label: "652 - Itaú Unibanco Holding S.A." },
  { value: "653", label: "653 - Banco Indusval S.A." },
  { value: "655", label: "655 - Banco Votorantim S.A." },
  { value: "707", label: "707 - Banco Daycoval S.A." },
  {
    value: "719",
    label: "719 - Banif-Banco Internacional do Funchal (Brasil)S.A.",
  },
  { value: "734", label: "734 - Banco Gerdau S.A." },
  { value: "740", label: "740 - Banco Barclays S.A." },
  { value: "745", label: "745 - Banco Citibank S.A." },
  { value: "746", label: "746 - Banco Modal S.A." },
  { value: "747", label: "747 - Banco Rabobank International Brasil S.A." },
  { value: "748", label: "748 - Banco Cooperativo Sicredi S.A." },
  { value: "749", label: "749 - Banco Simples S.A." },
  { value: "751", label: "751 - Dresdner Bank Brasil S.A. – Banco Múltiplo" },
  { value: "752", label: "752 - Banco BNP Paribas Brasil S.A." },
  { value: "755", label: "755 - Banco Merrill Lynch de Investimentos S.A." },
  { value: "756", label: "756 - Banco Cooperativo do Brasil S.A. – BANCOOB" },
  { value: "M03", label: "M03 - Banco Fiat S.A." },
  { value: "M06", label: "M06 - Banco de Lage Landen Brasil S.A." },
  { value: "M07", label: "M07 - Banco GMAC S.A." },
  { value: "M08", label: "M08 - Banco Citicard S.A." },
  { value: "M09", label: "M09 - Banco Itaucred Financiamentos S.A." },
  { value: "M11", label: "M11 - Banco IBM S.A." },
  { value: "M14", label: "M14 - Banco Volkswagen S.A." },
  { value: "M16", label: "M16 - Banco Rodobens S.A." },
  { value: "M18", label: "M18 - Banco Ford S.A." },
  { value: "M19", label: "M19 - Banco CNH Capital S.A." },
  { value: "M20", label: "M20 - Banco Toyota do Brasil S.A." },
  { value: "M22", label: "M22 - Banco Honda S.A." },
];

const bankTypes = [
  { value: "conta_corrente", label: "Conta Corrente" },
  { value: "conta_poupanca", label: "Conta Poupança" },
  { value: "conta_corrente_conjunta", label: "Conta Corrente Conjunta" },
  { value: "conta_poupanca_conjunta", label: "Conta Poupança Conjunta" },
];
type IStatus = {
  label: string;
  color: string;
};

type ITransferStatus = {
  pending_transfer: IStatus;
  transferred: IStatus;
  failed: IStatus;
  processing: IStatus;
  canceled: IStatus;
};

const transferStatus: ITransferStatus = {
  pending_transfer: {
    label: "Pendente",
    color: colors.orange[500],
  },
  transferred: {
    label: "Transferido",
    color: colors.lightGreen[500],
  },
  failed: {
    label: "Falhou",
    color: colors.red[500],
  },
  processing: {
    label: "Processando",
    color: colors.yellow[700],
  },
  canceled: {
    label: "Cancelado",
    color: colors.gray[500],
  },
};

type IRegistrationStatus = {
  processing: IStatus;
  authorized: IStatus;
  paid: IStatus;
  refunded: IStatus;
  waiting_payment: IStatus;
  pending_refund: IStatus;
  refused: IStatus;
};

const registrationStatus: IRegistrationStatus = {
  processing: {
    label: "Processando",
    color: colors.yellow[900],
  },
  authorized: {
    label: "Autorizado",
    color: colors.lightBlue[500],
  },
  paid: {
    label: "Pago",
    color: colors.lightGreen[500],
  },
  refunded: {
    label: "Reembolsado",
    color: colors.teal[500],
  },
  waiting_payment: {
    label: "Aguardando pagamento",
    color: colors.yellow[900],
  },
  pending_refund: {
    label: "Aguardando reembolso",
    color: colors.yellow[900],
  },
  refused: {
    label: "Recusado",
    color: colors.red[500],
  },
};

export default {
  genders,
  paymentMethods,
  months,
  states,
  bankCodes,
  bankTypes,
  transferStatus,
  registrationStatus,
};
