import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Palavra-chave principal da página (usada no H1 e no title)
  keyword: string;
  resumo: string;
  metaDescription: string;
  icon: IconName;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
  destaque?: boolean;
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de Pia',
    keyword: 'Desentupimento de pia em São Paulo',
    resumo: 'Pia da cozinha ou do banheiro parada, com gordura ou resto de comida? Desentupimos na hora.',
    metaDescription:
      'Desentupimento de pia 24h em São Paulo e Grande SP. Pia de cozinha e lavatório com gordura ou resíduos. Atendimento rápido e com garantia.',
    icon: 'faucet',
    destaque: true,
    intro: [
      'A pia da cozinha é um dos pontos que mais entopem: gordura, borra de café e restos de comida grudam na tubulação e, com o tempo, a água para de descer. No banheiro, o vilão costuma ser cabelo e sabão.',
      'A SOS Desentupidora SP atende 24 horas em São Paulo e na Grande SP, com máquinas próprias que desobstruem o encanamento por dentro, sem quebrar a bancada nem o piso.',
    ],
    sinais: [
      'Água descendo devagar ou parada na cuba',
      'Mau cheiro vindo do ralo da pia',
      'Barulho de borbulhas quando a água escoa',
      'Água voltando pelo ralo do tanque ou da área de serviço',
    ],
    comoFazemos: [
      'Verificamos o sifão e o ponto da obstrução',
      'Usamos a máquina adequada para a tubulação da pia',
      'Desobstruímos e testamos o escoamento com água corrente',
      'Orientamos como evitar que a pia entupa de novo',
    ],
    faq: [
      {
        q: 'Soda cáustica resolve pia entupida?',
        a: 'Às vezes alivia, mas pode danificar canos e conexões e não remove a gordura acumulada mais à frente na tubulação. O ideal é a desobstrução mecânica.',
      },
      {
        q: 'Precisa quebrar a parede para desentupir a pia?',
        a: 'Na grande maioria dos casos, não. A máquina alcança a obstrução por dentro do cano.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de Vaso Sanitário',
    keyword: 'Desentupimento de vaso sanitário em São Paulo',
    resumo: 'Vaso que não desce, transbordando ou com água subindo? Atendimento 24 horas.',
    metaDescription:
      'Desentupimento de vaso sanitário 24h em São Paulo e Grande SP. Privada entupida ou transbordando? Atendimento rápido, sem quebra-quebra, com garantia.',
    icon: 'toilet',
    destaque: true,
    intro: [
      'Vaso sanitário entupido é emergência: o banheiro fica sem uso e existe risco de transbordar. Papel em excesso, lenço umedecido, absorvente e objetos que caem no vaso estão entre as causas mais comuns.',
      'Desentupimos vasos sanitários em casas, apartamentos, comércios e condomínios, com equipamentos que não danificam a louça.',
    ],
    sinais: [
      'Descarga não leva a água embora',
      'Nível da água sobe e demora para baixar',
      'Água do vaso borbulha quando outro ralo é usado',
      'Mau cheiro de esgoto no banheiro',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está no vaso ou na tubulação de esgoto',
      'Desobstruímos com o equipamento certo para cada caso',
      'Testamos a descarga várias vezes',
      'Deixamos o banheiro limpo ao terminar',
    ],
    faq: [
      {
        q: 'Precisa tirar o vaso do lugar?',
        a: 'Na maioria dos casos, não. Só é necessário quando há objeto preso que não sai por dentro da louça.',
      },
      {
        q: 'Atendem vaso entupido de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive fins de semana e feriados.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de Ralo',
    keyword: 'Desentupimento de ralo em São Paulo',
    resumo: 'Ralo do box, da área de serviço ou do quintal entupido e alagando? Resolvemos.',
    metaDescription:
      'Desentupimento de ralo 24h em São Paulo e Grande SP. Ralo de box, área de serviço, cozinha e quintal. Atendimento rápido e com garantia.',
    icon: 'drain',
    destaque: true,
    intro: [
      'Ralo entupido faz o box virar piscina e espalha mau cheiro pela casa. Cabelo, sabão, areia e folhas são as causas mais comuns, principalmente em ralos de banheiro e de quintal.',
      'Desentupimos ralos de box, área de serviço, cozinha, garagem e quintal, limpando também a caixa sifonada quando necessário.',
    ],
    sinais: [
      'Água acumulando no box durante o banho',
      'Ralo devolvendo água quando a máquina de lavar esvazia',
      'Cheiro de esgoto saindo do ralo',
      'Quintal ou garagem alagando com chuva',
    ],
    comoFazemos: [
      'Abrimos e limpamos a caixa sifonada',
      'Desobstruímos a tubulação até a saída de esgoto',
      'Testamos o escoamento com bastante água',
      'Recolocamos a grelha e deixamos o local limpo',
    ],
    faq: [
      {
        q: 'Por que o ralo volta a entupir?',
        a: 'Geralmente porque a sujeira continua acumulada mais à frente, na caixa sifonada ou no cano. Por isso limpamos o trecho todo, não só a boca do ralo.',
      },
      {
        q: 'Vocês tiram o mau cheiro do ralo?',
        a: 'Quando o cheiro vem de sujeira acumulada ou de caixa sifonada sem água, a limpeza resolve. Se houver outro problema na tubulação, explicamos antes de qualquer serviço.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de Esgoto',
    keyword: 'Desentupimento de esgoto em São Paulo',
    resumo: 'Rede de esgoto, caixa de inspeção e tubulação principal desentupidas com máquina.',
    metaDescription:
      'Desentupimento de esgoto 24h em São Paulo e Grande SP. Rede, caixa de inspeção e tubulação de esgoto. Atendimento rápido, com garantia.',
    icon: 'pipe',
    destaque: true,
    intro: [
      'Quando o esgoto principal entope, todos os pontos da casa sentem: ralos voltando, vasos que não descem e mau cheiro forte. Raízes, gordura acumulada e objetos jogados no vaso costumam ser a causa.',
      'Trabalhamos com máquinas rotativas e equipamentos de alta pressão para desobstruir a rede de esgoto de casas, prédios, comércios e indústrias.',
    ],
    sinais: [
      'Vários ralos e vasos entupidos ao mesmo tempo',
      'Caixa de inspeção cheia ou transbordando',
      'Retorno de esgoto no quintal ou no ralo mais baixo da casa',
      'Mau cheiro forte e persistente',
    ],
    comoFazemos: [
      'Localizamos o trecho entupido pela caixa de inspeção',
      'Desobstruímos com máquina rotativa ou hidrojateamento',
      'Testamos o fluxo em toda a rede',
      'Orientamos sobre manutenção preventiva',
    ],
    faq: [
      {
        q: 'Atendem condomínios e empresas?',
        a: 'Sim. Atendemos residências, condomínios, comércios, restaurantes e indústrias.',
      },
      {
        q: 'Raiz de árvore entope esgoto?',
        a: 'Sim. Raízes entram pelas juntas dos canos e formam bloqueios. A máquina rotativa corta essas raízes e libera a passagem.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Limpeza de Caixa de Gordura',
    keyword: 'Limpeza de caixa de gordura em São Paulo',
    resumo: 'Limpeza e desentupimento de caixa de gordura em casas, restaurantes e condomínios.',
    metaDescription:
      'Limpeza de caixa de gordura em São Paulo e Grande SP. Residências, restaurantes e condomínios. Evite entupimento e mau cheiro. Atendimento 24h.',
    icon: 'tank',
    intro: [
      'A caixa de gordura segura a gordura da pia antes que ela chegue ao esgoto. Quando fica cheia, a pia começa a entupir, aparece mau cheiro e a gordura passa para a rede.',
      'Fazemos a limpeza completa da caixa de gordura e o desentupimento da tubulação que liga a pia até ela.',
    ],
    sinais: [
      'Pia da cozinha entupindo com frequência',
      'Cheiro forte de gordura ou esgoto perto da caixa',
      'Caixa de gordura transbordando',
      'Insetos perto da tampa da caixa',
    ],
    comoFazemos: [
      'Retiramos a gordura e os resíduos da caixa',
      'Desobstruímos a entrada e a saída da caixa',
      'Testamos o escoamento da pia até a caixa',
      'Indicamos a frequência ideal de limpeza para o seu imóvel',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo limpar a caixa de gordura?',
        a: 'Depende do uso. Em casas costuma ser a cada poucos meses; em restaurantes, com mais frequência. Indicamos o intervalo certo depois da limpeza.',
      },
      {
        q: 'Atendem restaurantes?',
        a: 'Sim. Atendemos restaurantes, lanchonetes, padarias e cozinhas industriais.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-tanque',
    nome: 'Desentupimento de Tanque',
    keyword: 'Desentupimento de tanque em São Paulo',
    resumo: 'Tanque da área de serviço com água parada ou voltando? Desentupimos rápido.',
    metaDescription:
      'Desentupimento de tanque e área de serviço 24h em São Paulo e Grande SP. Água parada ou voltando? Atendimento rápido e com garantia.',
    icon: 'drop',
    intro: [
      'O tanque recebe água com sabão, fiapos de roupa e terra, que se acumulam na tubulação. Quando entope, a máquina de lavar também deixa de escoar e a área de serviço alaga.',
      'Desentupimos o tanque e o ralo da área de serviço, liberando também a saída da máquina de lavar.',
    ],
    sinais: [
      'Água parada no tanque',
      'Ralo da área de serviço devolvendo água',
      'Máquina de lavar não esvazia direito',
      'Espuma saindo pelo ralo',
    ],
    comoFazemos: [
      'Verificamos o sifão e a ligação do tanque',
      'Desobstruímos a tubulação até o esgoto',
      'Testamos com o tanque cheio e com a máquina',
      'Deixamos tudo limpo e funcionando',
    ],
    faq: [
      {
        q: 'O entupimento do tanque afeta a máquina de lavar?',
        a: 'Sim, quando os dois usam a mesma saída. Por isso desentupimos o trecho todo.',
      },
      {
        q: 'Atendem fim de semana?',
        a: 'Sim. Atendemos 24 horas, todos os dias, inclusive fins de semana e feriados.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-coluna',
    nome: 'Desentupimento de Coluna',
    keyword: 'Desentupimento de coluna de prédio em São Paulo',
    resumo: 'Coluna de esgoto de prédio entupida, com retorno nos apartamentos de baixo.',
    metaDescription:
      'Desentupimento de coluna de esgoto de prédio 24h em São Paulo e Grande SP. Retorno de esgoto nos apartamentos? Atendimento rápido para condomínios.',
    icon: 'valve',
    intro: [
      'Em prédios, a coluna (prumada) de esgoto recebe a água de vários apartamentos. Quando entope, o esgoto volta nos andares mais baixos, normalmente pelo ralo da cozinha ou da área de serviço.',
      'Atendemos síndicos, administradoras e moradores com desentupimento de coluna de cozinha, de banheiro e de águas pluviais.',
    ],
    sinais: [
      'Retorno de água ou espuma nos apartamentos de baixo',
      'Vários moradores reclamando de pia ou ralo entupido',
      'Mau cheiro forte no prédio',
      'Barulho de água na coluna',
    ],
    comoFazemos: [
      'Identificamos a coluna e o andar da obstrução',
      'Desobstruímos com máquina pelo ponto de inspeção',
      'Testamos o escoamento de cima a baixo',
      'Orientamos o condomínio sobre prevenção',
    ],
    faq: [
      {
        q: 'Precisa entrar em todos os apartamentos?',
        a: 'Nem sempre. Na maioria dos casos o serviço é feito pelo ponto de inspeção ou por um apartamento só.',
      },
      {
        q: 'Atendem condomínio de madrugada?',
        a: 'Sim. Retorno de esgoto é emergência e atendemos 24 horas.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    nome: 'Hidrojateamento',
    keyword: 'Hidrojateamento em São Paulo',
    resumo: 'Jato de água de alta pressão para limpar tubulações com gordura e sujeira acumulada.',
    metaDescription:
      'Hidrojateamento em São Paulo e Grande SP. Limpeza de tubulação, rede de esgoto e galerias com jato de alta pressão. Residências, condomínios e empresas.',
    icon: 'pump',
    intro: [
      'O hidrojateamento usa água em alta pressão para limpar a parede interna dos canos, removendo gordura, lodo e incrustações que a máquina comum não tira por completo.',
      'É indicado para redes de esgoto de condomínios, restaurantes, indústrias e para tubulações que entopem com frequência.',
    ],
    sinais: [
      'Tubulação que entope várias vezes no mesmo ano',
      'Gordura acumulada em rede de restaurante ou condomínio',
      'Rede de esgoto ou águas pluviais com lodo e areia',
      'Necessidade de manutenção preventiva',
    ],
    comoFazemos: [
      'Avaliamos a rede e escolhemos o bico e a pressão adequados',
      'Fazemos a limpeza trecho a trecho',
      'Testamos o fluxo ao final',
      'Indicamos a frequência ideal de manutenção',
    ],
    faq: [
      {
        q: 'Hidrojateamento danifica o cano?',
        a: 'Não, quando feito com a pressão e o bico corretos para cada tubulação.',
      },
      {
        q: 'Qual a diferença para o desentupimento comum?',
        a: 'O desentupimento abre passagem; o hidrojateamento limpa a parede do cano por inteiro, o que reduz novos entupimentos.',
      },
    ],
  },
];

export const servicosDestaque = servicos.filter((s) => s.destaque);

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
