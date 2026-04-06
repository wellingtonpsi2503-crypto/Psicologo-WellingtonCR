# Site Profissional - Francisco Wellington CR

Site profissional para atendimento em Logoterapia e Clínica Existencial. Construído com React, Vite e design moderno.

## 🚀 Melhorias Implementadas

### ✅ Analytics (Google Analytics + Plausible)
- Hook customizado `useAnalytics` para rastreamento
- Suporte para Google Analytics 4 (GA4)
- Suporte para Plausible (focado em privacidade)
- Rastreamento de eventos: cliques em CTAs, interações com FAQ, navegação
- Conformidade com LGPD (IP anonimizado)

### ✅ Código Modularizado
- Componentes separados (Header, Hero, FAQ, Footer)
- Hooks customizados (useAnalytics, useIntersectionObserver)
- Configuração centralizada
- CSS organizado em arquivo separado

### ✅ Variáveis de Ambiente
- URLs e configurações em `.env`
- Fácil manutenção e deploy

### ✅ Performance
- Lazy loading de imagens
- Intersection Observer para animações
- Code splitting pronto

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Criar arquivo .env
cp .env.example .env

# Editar .env com suas configurações
# (veja seção "Configuração" abaixo)

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## ⚙️ Configuração

### 1. Analytics - Google Analytics (Recomendado)

**Passo 1: Criar conta no Google Analytics**
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Clique em "Começar a medir"
3. Configure sua propriedade (escolha "Web")
4. Copie seu **Measurement ID** (formato: `G-XXXXXXXXXX`)

**Passo 2: Adicionar ao projeto**

Edite o arquivo `.env`:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**Pronto!** O analytics já está funcionando.

**Para testar:**
1. Rode `npm run dev`
2. Abra o site no navegador
3. Abra o Google Analytics → Relatórios → Tempo real
4. Você deve ver sua visita aparecendo em tempo real

---

### 2. Analytics - Plausible (Alternativa Focada em Privacidade)

**Por que escolher Plausible?**
- ✅ Não usa cookies
- ✅ Compatível com LGPD/GDPR por padrão
- ✅ Interface simples e clara
- ✅ Leve (< 1KB)
- ❌ Pago (a partir de $9/mês)

**Passo 1: Criar conta no Plausible**
1. Acesse [plausible.io](https://plausible.io)
2. Crie uma conta
3. Adicione seu domínio

**Passo 2: Configurar no projeto**

Edite o arquivo `.env`:
```env
VITE_PLAUSIBLE_DOMAIN=seu-dominio.com.br
```

---

### 3. Atualizar Informações do Site

Edite o arquivo `.env`:

```env
# URLs de Contato
VITE_WHATSAPP_URL=https://wa.me/seu-numero
VITE_INSTAGRAM_URL=https://www.instagram.com/seu-usuario

# Agenda
VITE_AGENDA_EXTERNAL_URL=https://sua-agenda.com

# Site
VITE_SITE_URL=https://seu-dominio.com.br
VITE_CRP_NUMBER=17/12345  # Seu número CRP quando obtido
```

## 📊 Eventos Rastreados

O sistema já rastreia automaticamente:

### Eventos de Navegação
- Cliques no menu de navegação
- Scroll entre seções

### Eventos de Contato
- Clique no WhatsApp (hero, footer, contato)
- Clique na agenda online
- Clique nas redes sociais

### Eventos de Interação
- Abertura de perguntas no FAQ
- Visualização de seções (quando entram no viewport)
- Cliques em links externos

### Como ver os dados?

**Google Analytics:**
- Acesse [analytics.google.com](https://analytics.google.com)
- Vá em "Relatórios" → "Engajamento" → "Eventos"
- Você verá todos os eventos rastreados

**Plausible:**
- Acesse seu dashboard em plausible.io
- Clique em "Goals" para ver eventos personalizados

## 🎯 Adicionar Novos Eventos

Para rastrear novos eventos, use o hook `useAnalytics`:

```jsx
import { useAnalytics } from '../hooks/useAnalytics';

function MeuComponente() {
  const { trackEvent } = useAnalytics();

  const handleClick = () => {
    trackEvent('nome_do_evento', {
      categoria: 'valor',
      outra_propriedade: 'valor'
    });
  };

  return <button onClick={handleClick}>Clique aqui</button>;
}
```

## 🗂️ Estrutura do Projeto

```
wellington-site-refactored/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── FAQSection.jsx
│   │   └── Footer.jsx
│   ├── config/             # Configurações
│   │   └── siteConfig.js   # Dados do site centralizados
│   ├── hooks/              # Hooks customizados
│   │   ├── useAnalytics.js
│   │   └── useIntersectionObserver.js
│   ├── styles/             # Estilos CSS
│   │   └── main.css
│   ├── App.jsx            # Componente principal
│   └── main.jsx           # Ponto de entrada
├── public/                # Assets estáticos
│   ├── logo-wellington.png
│   └── retrato-wellington.png
├── .env.example           # Exemplo de variáveis de ambiente
├── package.json
├── vite.config.js
└── README.md
```

## 🚢 Deploy

### Netlify
Já configurado em `netlify.toml`. Passos:
1. Conecte seu repositório no Netlify
2. Configure as variáveis de ambiente no painel
3. Deploy automático!

### Vercel
Já configurado em `vercel.json`. Passos:
1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente no painel
3. Deploy automático!

**⚠️ IMPORTANTE:** Sempre configure as variáveis de ambiente (`VITE_*`) no painel da plataforma de deploy.

## 🔐 Privacidade e LGPD

O analytics está configurado para respeitar a LGPD:
- ✅ IP anonimizado
- ✅ Cookies com flags de segurança
- ✅ Opção de usar Plausible (sem cookies)
- ✅ Página de privacidade completa

## 📈 Próximos Passos

Depois de configurar o analytics, você pode:

1. **Monitorar desempenho**
   - Quais páginas são mais visitadas?
   - Quantos clicam no WhatsApp vs. Agenda?
   - Qual FAQ é mais aberta?

2. **Otimizar conversões**
   - Testar diferentes textos nos CTAs
   - Ajustar posicionamento de elementos
   - Melhorar seções com menos engajamento

3. **Adicionar mais funcionalidades**
   - Sistema de blog
   - Depoimentos de clientes
   - Galeria de fotos do consultório

## 🛠️ Desenvolvimento

```bash
# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📝 Notas

- O número CRP aparecerá como "17/XXXX" até você atualizar no `.env`
- Recomendo usar Google Analytics inicialmente (gratuito e completo)
- Plausible é excelente para privacidade, mas é pago
- Todos os eventos já estão configurados e funcionando

## 🆘 Suporte

Caso tenha dúvidas:
1. Verifique se o `.env` está configurado corretamente
2. Teste no modo de desenvolvimento primeiro (`npm run dev`)
3. Verifique o console do navegador para erros
4. Confirme que seu Measurement ID está correto

---

**Desenvolvido com ❤️ para Francisco Wellington CR**
