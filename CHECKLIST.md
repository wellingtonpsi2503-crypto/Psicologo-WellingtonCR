# ✅ Checklist de Configuração

Use este checklist para garantir que tudo está configurado corretamente.

## 📋 Antes de Começar

- [ ] Node.js 24.x instalado (`node --version`)
- [ ] npm ou yarn instalado
- [ ] Código baixado/clonado
- [ ] Terminal aberto na pasta do projeto

---

## 🔧 Configuração Inicial

### 1. Instalação
- [ ] Executou `npm install`
- [ ] Não houve erros na instalação
- [ ] Pasta `node_modules` foi criada

### 2. Variáveis de Ambiente
- [ ] Copiou `.env.example` para `.env`
- [ ] Abriu arquivo `.env` no editor

---

## 📊 Google Analytics (Obrigatório para Analytics)

### Setup no Google Analytics
- [ ] Criou conta em [analytics.google.com](https://analytics.google.com)
- [ ] Criou propriedade do tipo "Web"
- [ ] Copiou o Measurement ID (formato `G-XXXXXXXXXX`)

### Configuração no Projeto
- [ ] Colou o ID no `.env` em `VITE_GA_MEASUREMENT_ID`
- [ ] Verificou que não tem espaços antes/depois do ID

**Seu `.env` deve ter:**
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## 🌐 URLs e Contatos

### WhatsApp
- [ ] Verificou URL do WhatsApp em `VITE_WHATSAPP_URL`
- [ ] Testou o link abrindo no navegador

### Instagram
- [ ] Verificou URL do Instagram em `VITE_INSTAGRAM_URL`
- [ ] Testou o link abrindo no navegador

### Agenda
- [ ] Verificou URL da agenda em `VITE_AGENDA_EXTERNAL_URL`
- [ ] Testou o link abrindo no navegador

---

## 👨‍⚕️ Informações Profissionais

### CRP (Opcional por enquanto)
- [ ] Se já tem CRP: atualizou `VITE_CRP_NUMBER`
- [ ] Se não tem: deixou como `17/XXXX` (você pode mudar depois)

---

## 🧪 Testes Locais

### Iniciar Servidor
- [ ] Executou `npm run dev`
- [ ] Servidor iniciou sem erros
- [ ] Abriu `http://localhost:5173` no navegador

### Verificar Site
- [ ] Site carregou corretamente
- [ ] Imagens aparecem (logo e retrato)
- [ ] Menu de navegação funciona
- [ ] Botões de WhatsApp e Agenda funcionam

### Verificar Analytics
- [ ] Abriu DevTools (F12) → Console
- [ ] Viu mensagem de Google Analytics inicializado
- [ ] Abriu Google Analytics → Tempo Real
- [ ] Viu sua visita aparecendo em tempo real

### Testar Eventos
- [ ] Clicou no botão WhatsApp → evento apareceu no Analytics
- [ ] Clicou em uma pergunta do FAQ → evento apareceu
- [ ] Navegou pelo menu → evento apareceu

---

## 🚀 Deploy (Quando Pronto)

### Preparação
- [ ] Executou `npm run build`
- [ ] Build completou sem erros
- [ ] Pasta `dist` foi criada

### Netlify ou Vercel
- [ ] Conectou repositório na plataforma
- [ ] Adicionou variáveis de ambiente no painel:
  - [ ] `VITE_GA_MEASUREMENT_ID`
  - [ ] `VITE_WHATSAPP_URL`
  - [ ] `VITE_INSTAGRAM_URL`
  - [ ] `VITE_AGENDA_EXTERNAL_URL`
  - [ ] `VITE_CRP_NUMBER` (quando tiver)
  - [ ] `VITE_SITE_URL`
- [ ] Deploy executado com sucesso
- [ ] Site funcionando no domínio

### Pós-Deploy
- [ ] Testou site no domínio de produção
- [ ] Verificou analytics no domínio real
- [ ] Testou todos os links (WhatsApp, Instagram, Agenda)
- [ ] Testou responsividade (mobile, tablet)

---

## 📈 Monitoramento (Primeira Semana)

### Dia 1
- [ ] Verificou se analytics está coletando dados
- [ ] Compartilhou site com alguns contatos para testar

### Dia 3
- [ ] Verificou relatórios de engajamento
- [ ] Checou quais páginas são mais visitadas
- [ ] Viu quais CTAs têm mais cliques

### Dia 7
- [ ] Revisou todos os dados da semana
- [ ] Identificou pontos de melhoria
- [ ] Planejou otimizações baseadas em dados

---

## 🔐 Segurança

- [ ] `.env` está no `.gitignore`
- [ ] Não commitou arquivo `.env` no git
- [ ] Variáveis configuradas no painel do Netlify/Vercel
- [ ] Nenhuma credencial hardcoded no código

---

## 📝 Documentação

- [ ] Leu o `README.md` completo
- [ ] Leu o `MIGRATION.md` se migrou do código antigo
- [ ] Entendeu como adicionar novos eventos de analytics
- [ ] Salvou links importantes:
  - Analytics: https://analytics.google.com
  - Deploy: (Netlify ou Vercel)
  - Repositório: (GitHub/GitLab)

---

## ✨ Extras (Opcional)

- [ ] Configurou domínio customizado
- [ ] Adicionou SSL/HTTPS
- [ ] Configurou robots.txt
- [ ] Configurou sitemap.xml
- [ ] Testou acessibilidade
- [ ] Testou em diferentes navegadores
- [ ] Pediu feedback de amigos/colegas

---

## 🎉 Conclusão

Se marcou todos os itens principais, **parabéns!** 

Seu site está:
- ✅ Configurado corretamente
- ✅ Com analytics funcionando
- ✅ Pronto para receber visitantes
- ✅ Rastreando dados importantes

**Próximos passos:**
1. Monitore os dados por uma semana
2. Analise o comportamento dos visitantes
3. Faça ajustes baseados nos dados
4. Continue melhorando o site

---

**Data de Configuração:** ___/___/___
**Deployment ID/URL:** _________________
**Measurement ID:** G-_________________

---

💡 **Dica:** Imprima este checklist e marque fisicamente cada item conforme completa!
