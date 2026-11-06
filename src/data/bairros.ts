// Regiões e cidades atendidas na Grande São Paulo.
// Cada item gera a página /desentupidora-em-<slug>/
export type Zona =
  | 'São Paulo (Capital)'
  | 'Grande ABC'
  | 'Região Oeste'
  | 'Região Norte e Guarulhos'
  | 'Alto Tietê'
  | 'Região Sudoeste';

export interface Bairro {
  slug: string;
  nome: string;
  zona: Zona;
  // Texto exclusivo da página para não repetir conteúdo entre cidades
  sobre: string;
  vizinhos: string[];
}

// Regiões em foco aparecem com destaque nas listagens (vazio = nenhuma)
export const zonasPrioritarias: Zona[] = [];
export const ordemZonas: Zona[] = [
  'São Paulo (Capital)',
  'Grande ABC',
  'Região Oeste',
  'Região Norte e Guarulhos',
  'Alto Tietê',
  'Região Sudoeste',
];

export const bairros: Bairro[] = [
  // Capital
  {
    slug: 'zona-norte',
    nome: 'Zona Norte de SP',
    zona: 'São Paulo (Capital)',
    sobre:
      'A Zona Norte reúne bairros como Santana, Tucuruvi, Casa Verde, Vila Maria e Pirituba, com muitas casas antigas e sobrados. São comuns entupimentos de esgoto por raiz de árvore e caixas de gordura cheias.',
    vizinhos: ['Santana', 'Tucuruvi', 'Casa Verde', 'Vila Maria', 'Pirituba'],
  },
  {
    slug: 'zona-sul',
    nome: 'Zona Sul de SP',
    zona: 'São Paulo (Capital)',
    sobre:
      'Na Zona Sul atendemos de Moema, Vila Mariana e Saúde até Santo Amaro, Campo Limpo e Grajaú. Muitos prédios e restaurantes, onde o desentupimento de esgoto e a limpeza de caixa de gordura são chamados frequentes.',
    vizinhos: ['Moema', 'Vila Mariana', 'Santo Amaro', 'Jabaquara', 'Campo Limpo'],
  },
  {
    slug: 'zona-leste',
    nome: 'Zona Leste de SP',
    zona: 'São Paulo (Capital)',
    sobre:
      'A Zona Leste é a região mais populosa da capital, de Tatuapé e Mooca até Itaquera e São Mateus. Atendemos casas, comércios e condomínios com desentupimento de pia, vaso, ralo e rede de esgoto.',
    vizinhos: ['Tatuapé', 'Mooca', 'Penha', 'Itaquera', 'São Mateus'],
  },
  {
    slug: 'zona-oeste',
    nome: 'Zona Oeste de SP',
    zona: 'São Paulo (Capital)',
    sobre:
      'Na Zona Oeste atendemos Pinheiros, Lapa, Perdizes, Butantã e Vila Leopoldina, com muitos restaurantes e prédios residenciais. Limpeza de caixa de gordura e hidrojateamento são serviços bastante pedidos.',
    vizinhos: ['Pinheiros', 'Lapa', 'Perdizes', 'Butantã', 'Vila Leopoldina'],
  },
  {
    slug: 'centro-de-sao-paulo',
    nome: 'Centro de SP',
    zona: 'São Paulo (Capital)',
    sobre:
      'O Centro tem prédios antigos, comércios e restaurantes, onde tubulações mais velhas entopem com facilidade. Atendemos República, Sé, Bela Vista, Liberdade e Consolação, inclusive fora do horário comercial.',
    vizinhos: ['República', 'Bela Vista', 'Liberdade', 'Consolação', 'Santa Cecília'],
  },
  // Grande ABC
  {
    slug: 'santo-andre',
    nome: 'Santo André',
    zona: 'Grande ABC',
    sobre:
      'Santo André tem bairros residenciais tradicionais e muitos condomínios novos. Atendemos desentupimento de pia, vaso sanitário e esgoto em casas, apartamentos e comércios da cidade.',
    vizinhos: ['São Bernardo do Campo', 'São Caetano do Sul', 'Mauá'],
  },
  {
    slug: 'sao-bernardo-do-campo',
    nome: 'São Bernardo do Campo',
    zona: 'Grande ABC',
    sobre:
      'Em São Bernardo do Campo atendemos residências, condomínios e indústrias, com desentupimento de rede de esgoto, limpeza de caixa de gordura e hidrojateamento.',
    vizinhos: ['Santo André', 'Diadema', 'São Caetano do Sul'],
  },
  {
    slug: 'sao-caetano-do-sul',
    nome: 'São Caetano do Sul',
    zona: 'Grande ABC',
    sobre:
      'São Caetano do Sul é uma cidade compacta, com muitos prédios residenciais. O desentupimento de pia de cozinha e de vaso sanitário está entre os chamados mais comuns.',
    vizinhos: ['Santo André', 'São Bernardo do Campo', 'Zona Sul de SP'],
  },
  {
    slug: 'diadema',
    nome: 'Diadema',
    zona: 'Grande ABC',
    sobre:
      'Em Diadema atendemos casas, comércios e indústrias, com desentupimento de ralo, vaso sanitário, esgoto e limpeza de caixa de gordura.',
    vizinhos: ['São Bernardo do Campo', 'Zona Sul de SP'],
  },
  {
    slug: 'maua',
    nome: 'Mauá',
    zona: 'Grande ABC',
    sobre:
      'Em Mauá atendemos residências e comércios com desentupimento de pia, ralo, vaso sanitário e rede de esgoto, 24 horas por dia.',
    vizinhos: ['Santo André', 'Ribeirão Pires'],
  },
  // Região Oeste
  {
    slug: 'osasco',
    nome: 'Osasco',
    zona: 'Região Oeste',
    sobre:
      'Osasco é uma das maiores cidades da Grande SP, com muitos comércios e condomínios. Atendemos desentupimento de esgoto, limpeza de caixa de gordura e hidrojateamento em toda a cidade.',
    vizinhos: ['Barueri', 'Carapicuíba', 'Zona Oeste de SP'],
  },
  {
    slug: 'barueri',
    nome: 'Barueri',
    zona: 'Região Oeste',
    sobre:
      'Em Barueri e Alphaville atendemos residências, condomínios e empresas, com desentupimento, limpeza de caixa de gordura e hidrojateamento de rede.',
    vizinhos: ['Osasco', 'Santana de Parnaíba', 'Carapicuíba'],
  },
  {
    slug: 'carapicuiba',
    nome: 'Carapicuíba',
    zona: 'Região Oeste',
    sobre:
      'Em Carapicuíba atendemos casas e comércios com desentupimento de pia, vaso sanitário, ralo e esgoto, a qualquer hora do dia.',
    vizinhos: ['Osasco', 'Barueri', 'Cotia'],
  },
  {
    slug: 'cotia',
    nome: 'Cotia',
    zona: 'Região Oeste',
    sobre:
      'Cotia tem muitos condomínios de casas e chácaras. Atendemos desentupimento de rede de esgoto, caixa de inspeção e caixa de gordura.',
    vizinhos: ['Carapicuíba', 'Embu das Artes', 'Taboão da Serra'],
  },
  // Norte e Guarulhos
  {
    slug: 'guarulhos',
    nome: 'Guarulhos',
    zona: 'Região Norte e Guarulhos',
    sobre:
      'Guarulhos é a segunda maior cidade do estado. Atendemos residências, comércios, condomínios e empresas da cidade com desentupimento e hidrojateamento 24 horas.',
    vizinhos: ['Zona Norte de SP', 'Zona Leste de SP', 'Itaquaquecetuba'],
  },
  // Alto Tietê
  {
    slug: 'mogi-das-cruzes',
    nome: 'Mogi das Cruzes',
    zona: 'Alto Tietê',
    sobre:
      'Em Mogi das Cruzes atendemos casas, condomínios e comércios com desentupimento de pia, vaso sanitário, esgoto e limpeza de caixa de gordura.',
    vizinhos: ['Suzano', 'Itaquaquecetuba'],
  },
  {
    slug: 'suzano',
    nome: 'Suzano',
    zona: 'Alto Tietê',
    sobre:
      'Em Suzano atendemos residências e empresas com desentupimento de ralo, pia, vaso sanitário e rede de esgoto.',
    vizinhos: ['Mogi das Cruzes', 'Ferraz de Vasconcelos', 'Itaquaquecetuba'],
  },
  {
    slug: 'itaquaquecetuba',
    nome: 'Itaquaquecetuba',
    zona: 'Alto Tietê',
    sobre:
      'Em Itaquaquecetuba atendemos casas e comércios com desentupimento de esgoto, vaso sanitário e caixa de gordura, 24 horas.',
    vizinhos: ['Guarulhos', 'Suzano', 'Zona Leste de SP'],
  },
  // Sudoeste
  {
    slug: 'taboao-da-serra',
    nome: 'Taboão da Serra',
    zona: 'Região Sudoeste',
    sobre:
      'Em Taboão da Serra atendemos prédios, casas e comércios com desentupimento de pia, vaso sanitário, ralo e esgoto.',
    vizinhos: ['Embu das Artes', 'Zona Sul de SP', 'Cotia'],
  },
  {
    slug: 'embu-das-artes',
    nome: 'Embu das Artes',
    zona: 'Região Sudoeste',
    sobre:
      'Em Embu das Artes atendemos residências e comércios com desentupimento de ralo, pia, vaso e rede de esgoto, a qualquer hora.',
    vizinhos: ['Taboão da Serra', 'Cotia'],
  },
];

export function bairroPath(b: Bairro) {
  return `/desentupidora-em-${b.slug}/`;
}

export function bairrosPorZona() {
  return ordemZonas
    .map((zona) => ({ zona, bairros: bairros.filter((b) => b.zona === zona) }))
    .filter((g) => g.bairros.length > 0);
}
