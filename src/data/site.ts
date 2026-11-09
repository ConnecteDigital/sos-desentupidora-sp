// Dados centrais da empresa. Altere aqui e o site inteiro é atualizado.

// WhatsApp: 55 + DDD + número, só dígitos
const WHATSAPP_DIGITS = '5511983423445';

export const site = {
  name: 'SOS Desentupidora SP',
  url: 'https://sosdesentupidorasp.com.br',
  city: 'São Paulo',
  region: 'Grande São Paulo',
  state: 'SP',
  phoneDigits: WHATSAPP_DIGITS,
  // Link do botão de ligação (formato pedido pelo cliente: 011 98342-3445)
  tel: 'tel:01198342-3445',
  // Como o número aparece no botão de ligação
  phoneDisplay: '011 98342-3445',
  // Como o número do WhatsApp aparece
  whatsappDisplay: '11 98342-3445',
  description:
    'Desentupidora 24 horas em São Paulo e Grande SP. Desentupimento de pia, vaso sanitário, ralo, esgoto, caixa de gordura e hidrojateamento. Atendimento rápido, com garantia.',
};

export const DEFAULT_WHATSAPP_MESSAGE =
  'Olá! Vim pelo site da SOS Desentupidora SP e preciso de um desentupimento.';

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://api.whatsapp.com/send?phone=${site.phoneDigits}&text=${encodeURIComponent(message)}`;
}

// Contêiner do Google Tag Manager. Todo o rastreamento (Google Ads, conversões) fica dentro dele.
export const gtmId = 'GTM-NLF9PL69';
