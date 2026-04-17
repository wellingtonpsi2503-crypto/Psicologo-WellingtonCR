export const siteConfig = {
  whatsapp: import.meta.env.VITE_WHATSAPP_URL || 'https://wa.me/5588998476022?text=Ol%C3%A1!%20%F0%9F%98%8A%0ABem-vindo(a)%20ao%20meu%20WhatsApp!%0ASou%20psic%C3%B3logo%20com%20%C3%AAnfase%20em%20Logoterapia%2C%20e%20meu%20trabalho%20%C3%A9%20ajudar%20as%20pessoas%20a%20encontrarem%20mais%20sentido%2C%20prop%C3%B3sito%20e%20dire%C3%A7%C3%A3o%20na%20vida%2C%20especialmente%20nos%20momentos%20de%20dificuldade%20e%20sofrimento.%0AFico%20muito%20feliz%20que%20voc%C3%AA%20tenha%20chegado%20at%C3%A9%20aqui.%0APode%20me%20contar%20o%20que%20te%20trouxe%20ou%20no%20que%20gostaria%20de%20trabalhar.%20Estou%20%C3%A0%20disposi%C3%A7%C3%A3o%20para%20conversarmos%20e%20agendarmos%20uma%20sess%C3%A3o%20(online%20ou%20presencial).%0AQual%20%C3%A9%20o%20seu%20nome%3F%0AAguardo%20seu%20retorno%20com%20carinho.%0AUm%20abra%C3%A7o%2C%0AWellington%20CR%20%F0%9F%AB%B0',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || 'https://www.instagram.com/wellingtoncr_psi',

  calendly:
    import.meta.env.VITE_CALENDLY_URL ||
    'https://calendar.app.google/pEgsS1JfXsEUyyAB6',
  agendaExternal:
    import.meta.env.VITE_AGENDA_EXTERNAL_URL || 'https://agenda-online-nu.vercel.app/',

  analytics: {
    gaId: import.meta.env.VITE_GA_MEASUREMENT_ID,
    plausibleDomain: import.meta.env.VITE_PLAUSIBLE_DOMAIN,
  },

  routes: {
    home: '/',
    privacy: '/privacidade',
    approach: '/abordagem-e-pilares',
  },

  assets: {
    portrait: '/retrato-wellington.png',
    logo: '/logo-wellington.png',
  },

  seo: {
    title: 'Francisco Wellington CR | Logoterapia e Clínica Existencial',
    description:
      'Atendimento online e presencial em Logoterapia e clínica existencial com Francisco Wellington CR. Uma escuta orientada por sentido, presença e responsabilidade diante da vida.',
    privacyTitle: 'Ética, Sigilo, Privacidade e Proteção de Dados | Francisco Wellington CR',
    privacyDescription:
      'Informações sobre sigilo profissional, atendimento on-line, privacidade e proteção de dados no site de Francisco Wellington CR.',
    approachTitle: 'Abordagem e Pilares | Francisco Wellington CR',
    approachDescription:
      'Página dedicada à Logoterapia e à Psicologia Existencial, com apresentação da abordagem, pilares centrais e referências reais para aprofundamento.',
  },

  professional: {
    name: 'Francisco Wellington CR',
    crp: import.meta.env.VITE_CRP_NUMBER || '17/XXXX',
    specialties: ['Logoterapia', 'Clínica Existencial'],
  },

  navigation: [
    ['sobre', 'Sobre'],
    ['abordagem', 'Abordagem'],
    ['pilares', 'Pilares'],
    ['estrutura', 'Estrutura'],
    ['agenda', 'Agenda'],
    ['faq', 'Perguntas'],
    ['contato', 'Contato'],
  ],
};

export const contentData = {
  structureSteps: [
    {
      number: '01',
      title: 'Primeiro contato',
      text: 'O início do atendimento acolhe sua história, seu momento atual e as questões que hoje pedem maior atenção clínica.',
    },
    {
      number: '02',
      title: 'Alinhamento prático',
      text: 'Definimos formato, disponibilidade, frequência inicial e os combinados necessários para um processo organizado e sereno.',
    },
    {
      number: '03',
      title: 'Caminho terapêutico',
      text: 'O acompanhamento se sustenta em ética, constância e presença clínica, favorecendo elaboração, direção e aprofundamento.',
    },
  ],

  pillars: [
    {
      title: 'Liberdade da vontade',
      text: 'Mesmo diante de limites e sofrimento, a pessoa conserva a possibilidade de posicionar-se interiormente e responder de modo consciente à vida.',
    },
    {
      title: 'Vontade de sentido',
      text: 'A Logoterapia compreende que o ser humano é movido pela busca de significado, valor e direção existencial, e não apenas pela redução da dor.',
    },
    {
      title: 'Sentido da vida',
      text: 'Cada existência traz possibilidades concretas de sentido. A clínica favorece a percepção desses caminhos no cotidiano, nas relações e nas escolhas.',
    },
  ],

  faqs: [
    {
      q: 'Como funciona o primeiro atendimento?',
      a: 'O primeiro encontro é dedicado à escuta da sua história, à compreensão do momento vivido e ao alinhamento inicial do acompanhamento terapêutico.',
    },
    {
      q: 'A Logoterapia serve apenas para momentos de crise?',
      a: 'Não. Ela também favorece autoconhecimento, amadurecimento, reconexão com valores, responsabilidade e construção de sentido ao longo da vida.',
    },
    {
      q: 'O atendimento pode ser online e presencial?',
      a: 'Sim. O acompanhamento pode acontecer de forma online ou presencial, conforme a disponibilidade e aquilo que melhor se adequar ao seu contexto.',
    },
    {
      q: 'Para quais públicos é voltado o atendimento?',
      a: 'O atendimento é direcionado a jovens, adolescentes e adultos, considerando as singularidades de cada fase da vida e de cada percurso existencial.',
    },
    {
      q: 'Como a frequência das sessões é definida?',
      a: 'A frequência inicial é alinhada no começo do processo, considerando o momento vivido, a disponibilidade e a necessidade clínica de continuidade.',
    },
    {
      q: 'O processo terapêutico é sigiloso?',
      a: 'Sim. O atendimento é conduzido com compromisso ético, respeito à confidencialidade e responsabilidade clínica em relação ao que é compartilhado.',
    },
    {
      q: 'Como faço para agendar um horário?',
      a: 'Você pode iniciar pelo WhatsApp ou acessar diretamente a agenda online para visualizar horários disponíveis e dar início ao atendimento.',
    },
  ],

  faqHighlights: [
    'Atendimento online e presencial',
    'Crianças, adolescentes e adultos',
    'Organização prática com clareza',
  ],

  privacyPrinciples: [
    {
      title: 'Sigilo profissional',
      text: 'O atendimento é orientado pelo dever ético de confidencialidade no exercício profissional, com proteção da intimidade e do conteúdo compartilhado ao longo do processo terapêutico.',
    },
    {
      title: 'Uso responsável de dados pessoais',
      text: 'Informações fornecidas em formulários, canais de contato e agendamento devem ser tratadas com finalidade legítima, acesso restrito e cuidado proporcional à natureza do serviço prestado.',
    },
    {
      title: 'Atendimento mediado por tecnologias digitais',
      text: 'Nos atendimentos realizados com apoio de tecnologias digitais, a condução do serviço observa critérios éticos, técnicos e de segurança compatíveis com a prática profissional responsável.',
    },
  ],

  privacySections: [
    {
      title: '1. Compromisso ético e profissional',
      text: 'Esta página apresenta, de forma organizada, os compromissos relacionados à ética profissional, ao sigilo do atendimento, à privacidade das informações e ao tratamento responsável de dados pessoais vinculados ao uso deste site e aos canais de contato clínico.',
    },
    {
      title: '2. Informações que podem ser tratadas',
      text: 'Podem ser tratados dados fornecidos voluntariamente pela pessoa usuária, como nome, telefone, e-mail, mensagens encaminhadas por canais digitais e informações estritamente necessárias à organização inicial do contato ou agendamento.',
    },
    {
      title: '3. Finalidades do tratamento',
      text: 'As informações são utilizadas, quando necessário, para responder contatos, organizar solicitações de atendimento, realizar comunicações relacionadas à agenda, manter registros profissionais pertinentes e resguardar a continuidade adequada do serviço.',
    },
    {
      title: '4. Sigilo e confidencialidade',
      text: 'As informações compartilhadas em contexto profissional devem ser tratadas com reserva, confidencialidade e responsabilidade ética. Situações excepcionais são apreciadas apenas nos limites éticos e legais aplicáveis ao exercício profissional.',
    },
    {
      title: '5. Atendimento on-line e recursos digitais',
      text: 'Quando o serviço envolver tecnologias digitais, busca-se adotar medidas razoáveis de organização, segurança e orientação quanto ao uso dos recursos empregados, preservando a dignidade, a privacidade e a qualidade do atendimento.',
    },
    {
      title: '6. Armazenamento, acesso e proteção',
      text: 'Dados e registros vinculados ao exercício profissional devem ser mantidos com acesso restrito, proteção compatível com sua sensibilidade e organização responsável, evitando exposição indevida, circulação desnecessária ou compartilhamentos incompatíveis com sua finalidade.',
    },
    {
      title: '7. Direitos da pessoa titular dos dados',
      text: 'A pessoa titular poderá solicitar informações sobre dados pessoais tratados em canais digitais vinculados ao site, observados os limites éticos, legais e técnicos aplicáveis ao exercício profissional e à guarda responsável de registros.',
    },
    {
      title: '8. Canal de contato sobre privacidade',
      text: 'Solicitações relacionadas a privacidade, uso de dados e informações gerais sobre sigilo podem ser encaminhadas pelo canal oficial de contato disponível neste site.',
    },
  ],

  officialReferences: [
    {
      title: 'Código de Ética Profissional da/o Psicóloga/o',
      text: 'Documento oficial do CFP com os princípios, responsabilidades, deveres e parâmetros éticos do exercício profissional.',
      href: 'https://transparencia.cfp.org.br/wp-content/uploads/sites/29/2025/04/CodigoDeEtica_2025_Digital.pdf',
      label: 'Ler documento oficial',
    },
    {
      title: 'Atendimento psicológico on-line e Resolução CFP nº 09/2024',
      text: 'Página oficial explicativa sobre atendimento mediado por tecnologias digitais, vigência da resolução e orientações gerais do Sistema Conselhos.',
      href: 'https://transparencia.cfp.org.br/crp12/pergunta-frequente/atendimentopsicologicoonline/',
      label: 'Acessar orientação oficial',
    },
    {
      title: 'Lei Geral de Proteção de Dados Pessoais (LGPD)',
      text: 'Texto oficial da legislação brasileira que disciplina o tratamento de dados pessoais, inclusive em meios digitais.',
      href: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm',
      label: 'Consultar texto legal',
    },
  ],

  approachReferences: [
    {
      title: 'Viktor Frankl Institute — About Logotherapy',
      text: 'Apresentação institucional da Logoterapia como filosofia da existência e modalidade terapêutica, com síntese de princípios fundamentais.',
      href: 'https://www.viktorfranklinstitute.org/about-logotherapy/',
      label: 'Acessar fonte oficial',
    },
    {
      title: 'Viktor Frankl Institute Vienna — Logotherapy and Existential Analysis',
      text: 'Página oficial com explicações complementares sobre conceitos, atitude, sentido e elementos do trabalho logoterapêutico.',
      href: 'https://www.viktorfrankl.org/logotherapy.html',
      label: 'Ler referência',
    },
    {
      title: 'Books by Viktor Frankl',
      text: 'Página oficial com obras centrais de Viktor Frankl, incluindo títulos fundamentais para aprofundamento da abordagem.',
      href: 'https://www.viktorfrankl.org/books_by_vf.html',
      label: 'Ver obras',
    },
    {
      title: 'Springer — Logotherapy and Existential Analysis',
      text: 'Série e volumes acadêmicos dedicados ao desenvolvimento contemporâneo da Logoterapia e da Análise Existencial.',
      href: 'https://link.springer.com/series/13368/books',
      label: 'Consultar série',
    },
  ],
};
