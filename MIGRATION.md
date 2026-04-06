# 🔄 Guia de Migração - Passo a Passo

Este guia te ajudará a migrar do código antigo para a versão refatorada com analytics.

## Opção 1: Começar do Zero (Recomendado)

### Passo 1: Backup
```bash
# Renomeie seu projeto atual
mv seu-projeto-atual seu-projeto-antigo-backup
```

### Passo 2: Use o código refatorado
```bash
# O novo código já está em wellington-site-refactored/
cd wellington-site-refactored
```

### Passo 3: Configure
```bash
# Copie o exemplo
cp .env.example .env

# Edite com suas informações
nano .env  # ou use seu editor preferido
```

**Configure no `.env`:**
```env
# OBRIGATÓRIO: Seu Measurement ID do Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# URLs (já estão preenchidas do seu site original)
VITE_WHATSAPP_URL=https://wa.me/qr/W2TYKS3VMBLAL1
VITE_INSTAGRAM_URL=https://www.instagram.com/wellingtoncr_psi

# Quando tiver registro, atualize:
VITE_CRP_NUMBER=17/XXXXX
```

### Passo 4: Instale e rode
```bash
npm install
npm run dev
```

### Passo 5: Teste
Abra http://localhost:5173 e:
- ✅ Clique nos botões de WhatsApp e Agenda
- ✅ Abra algumas perguntas do FAQ
- ✅ Navegue pelo menu
- ✅ Verifique o Google Analytics em tempo real

---

## Opção 2: Migrar Componente por Componente

Se preferir migrar gradualmente:

### 1. Adicionar Analytics ao Projeto Atual

Copie apenas os arquivos de analytics:
```bash
# Criar pastas
mkdir -p src/hooks src/config

# Copiar hooks
cp wellington-site-refactored/src/hooks/useAnalytics.js src/hooks/
cp wellington-site-refactored/src/hooks/useIntersectionObserver.js src/hooks/

# Copiar config
cp wellington-site-refactored/src/config/siteConfig.js src/config/

# Copiar .env
cp wellington-site-refactored/.env.example .env
```

### 2. Atualizar App.jsx

Adicione no topo do seu `App.jsx` atual:
```jsx
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(window.location.pathname);
  }, [trackPageView]);

  // ... resto do código
}
```

### 3. Adicionar Rastreamento nos CTAs

Em cada botão/link importante:
```jsx
const { trackEvent } = useAnalytics();

<a 
  href={whatsappUrl}
  onClick={() => trackEvent('contact_click', { method: 'whatsapp' })}
>
  WhatsApp
</a>
```

---

## 📊 Como Configurar o Google Analytics

### Passo 1: Criar Conta
1. Acesse [analytics.google.com](https://analytics.google.com)
2. Clique em "Começar a medir"
3. Nome da conta: "Francisco Wellington CR"
4. Nome da propriedade: "Site Profissional"
5. Categoria: "Saúde e Fitness"
6. Aceite os termos

### Passo 2: Configurar Stream
1. Escolha "Web"
2. URL do site: `seu-dominio.com.br` (ou localhost para testes)
3. Nome do stream: "Site Principal"
4. **Copie o Measurement ID** (formato `G-XXXXXXXXXX`)

### Passo 3: Adicionar ao Projeto
Edite `.env`:
```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Passo 4: Testar
```bash
npm run dev
```

Acesse seu site e vá para:
- Google Analytics → Relatórios → Tempo real
- Você deve ver sua visita em tempo real

---

## 🎯 Eventos Já Configurados

Assim que você adicionar o Measurement ID, estes eventos já funcionarão:

### 1. Navegação
- `navigation_click` - Clique em itens do menu

### 2. Contato
- `contact_click` - WhatsApp, Agenda
- `social_click` - Instagram

### 3. Engajamento
- `faq_interaction` - Abertura de perguntas
- `section_view` - Visualização de seções

### 4. Saídas
- `outbound_click` - Links externos

## 🔍 Verificar se Está Funcionando

### No Console do Navegador
Abra DevTools (F12) e vá na aba Console. Você verá:
```
Google Analytics initialized: G-XXXXXXXXXX
```

### No Google Analytics
1. Acesse analytics.google.com
2. Vá em Relatórios → Tempo real
3. Navegue no seu site
4. Você verá suas ações em tempo real

### Eventos Customizados
1. Analytics → Relatórios → Engajamento → Eventos
2. Aguarde algumas horas para dados aparecerem
3. Você verá: `contact_click`, `faq_interaction`, etc.

---

## ⚠️ Problemas Comuns

### "Analytics não está rastreando"
- ✅ Verificou se o Measurement ID está no `.env`?
- ✅ Reiniciou o servidor (`npm run dev`)?
- ✅ O ID começa com `G-`?

### "Eventos não aparecem no Analytics"
- ✅ Eventos levam algumas horas para aparecer (tempo real é imediato)
- ✅ Verifique em Relatórios → Tempo real primeiro
- ✅ Certifique-se de que os eventos estão sendo chamados (veja console)

### "Erro de CORS ou bloqueio de script"
- ✅ Desative bloqueadores de ads/rastreamento para teste
- ✅ Use modo anônimo do navegador
- ✅ Verifique se não há extensões bloqueando

---

## 🚀 Próximos Passos Após Migração

1. **Deploy em Produção**
   - Adicione as variáveis `VITE_*` no Netlify/Vercel
   - Faça deploy
   - Verifique analytics no domínio real

2. **Monitore por 1 Semana**
   - Veja quais páginas são mais visitadas
   - Quais CTAs têm mais cliques
   - Quais FAQs são mais abertos

3. **Otimize Baseado em Dados**
   - Melhore CTAs com baixo clique
   - Expanda FAQs mais populares
   - Ajuste conteúdo de páginas menos visitadas

---

## 📞 Precisa de Ajuda?

Se algo não funcionar:
1. Verifique o console do navegador (F12)
2. Confirme que `.env` está configurado
3. Reinicie o servidor
4. Teste em modo anônimo

**Tudo configurado?** Seu site agora tem analytics profissional! 🎉
