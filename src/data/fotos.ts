import type { ImageMetadata } from 'astro';

// Fotos reais, uma por serviço (src/assets/fotos/<slug>.jpg), geradas a partir de fotos/<slug>/.
// A imagem de fundo do topo da home fica em fotos/fundo/.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.jpg', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-pia': 'Desentupimento de pia de cozinha feito pela SOS Desentupidora SP',
  'desentupimento-de-vaso-sanitario': 'Desentupimento de vaso sanitário feito pela SOS Desentupidora SP',
  'desentupimento-de-ralo': 'Desentupimento de ralo feito pela SOS Desentupidora SP',
  'desentupimento-de-esgoto': 'Desentupimento de rede de esgoto com máquina',
  'limpeza-de-caixa-de-gordura': 'Limpeza de caixa de gordura feita pela SOS Desentupidora SP',
  hidrojateamento: 'Hidrojateamento de tubulação com jato de alta pressão',
  fundo: 'Equipe da SOS Desentupidora SP em atendimento',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const mod = arquivos[`../assets/fotos/${slug}.jpg`];
  if (!mod) return undefined;
  return { src: mod.default, alt: alts[slug] ?? 'Serviço realizado pela SOS Desentupidora SP' };
}

// Logo: coloque o arquivo em src/assets/logo.png (ou .jpg/.webp)
const logos = import.meta.glob<{ default: ImageMetadata }>('../assets/logo.{png,jpg,jpeg,webp}', { eager: true });
export const logo: ImageMetadata | undefined = Object.values(logos)[0]?.default;
