Template de Propostas — Guia do Projeto

Propósito
- Template para criar propostas interativas (landing de proposta) com conteúdo adaptável por cliente.
- Estrutura modular: seções, modais e fluxos podem ser ativados/ajustados conforme a necessidade.

Stack
- Next.js 15 (App Router), React 19
- Tailwind v4 com `@theme inline`
- Framer Motion (animações) e Lucide (ícones)
- React Flow (fluxogramas interativos)

Execução
- Requisitos: Node 18+
- Scripts:
  - `npm run dev` — desenvolvimento em http://localhost:3001
  - `npm run build` — build (Turbopack)
  - `npm start` — produção

Arquivos Principais
- `src/app/page.tsx` — estrutura da página, seções e mapeamento de modais/fluxos.
- `src/app/components/Modal.tsx` — componente de modal (tamanhos `full` e `md`).
- `src/app/components/FlowDiagram.tsx` — definição dos fluxos e tipos (`FlowKind`).
- `src/app/globals.css` — tokens de tema e utilitários globais.
- `public/branding/` — logos e ativos da identidade visual do cliente (use `logo.svg|png`).

Branding e Tema
- Identificação do cliente: em `src/app/page.tsx`, atualize:
  - `preparedFor` (nome do cliente)
  - `proposalDate` (data da proposta)
- Logos: coloque a logo do cliente em `public/branding/` e, se necessário, ajuste a referência em `page.tsx` (default: `branding/logo-placeholder.svg`).
- Cores: em `src/app/globals.css`, ajuste as variáveis:
  - `--prime-primary` (cor principal)
  - `--prime-accent` (cor de destaque)
  - `--prime-dark` (tom escuro)
- Boas práticas de identidade:
  - Mantenha contraste AA (WCAG) para textos e botões.
  - Prefira SVG para logotipos; otimize PNG/JPG quando necessários.

Conteúdo por Seção (padrão)
- Hero
  - Kicker: “PROPOSTA DE SOLUÇÃO COM IA”.
  - Título: benefício claro (ex.: “Agentes de IA para Atendimento Comercial”).
  - Subtítulo: frase curta de valor (ex.: automação ponta a ponta).
  - Badges: `preparedFor` (cliente) e `proposalDate` (data).
  - Logo do cliente ao lado do nav e versão maior no hero (ambas podem ser iguais).
- Desafio Atual
  - 3–4 cartões de dores do cliente/segmento (agendamento, no‑show, recepção, dados).
  - Use bullets diretos, sem termos técnicos excessivos e sem dados sensíveis.
- Nossas Soluções
  - 4 grupos de agentes (Agendamento, Anti No‑Show, Central de Informações, Pré‑Triagem/Preparo).
  - Cada grupo: 3 bullets de benefícios práticos.
  - Painel “Soluções Inteligentes”: CRM, Dashboard, Predição, Insights, Relatórios.
  - Painel “Confiabilidade e Segurança”: fallback humano, monitoramento, LGPD, segurança e suporte.
- Fluxo e Ferramentas
  - “AGENTES DE IA”: cards com botão “Ver fluxo” que abrem modais de fluxo (React Flow).
  - “FERRAMENTAS”: cards para CRM e Dashboard com botão “Ver exemplo”.
- Plano de Implantação
  - 4 fases (Imersão/Arquitetura; Desenvolvimento dos Agentes; Integrações/Painéis; Testes/Go‑Live).
  - Cada fase abre modal com escopo, atividades, entregáveis e critérios de aceite.
- Ganhos Esperados
  - 2 painéis principais com resultados esperados e inteligência em tempo real.
  - Use métricas de exemplo ou do cliente; inclua disclaimer (estimativas sujeitas a variações).
- Investimento
  - Estruturar em painéis (ex.: Implementação, Recorrência, Solução Completa).
  - Itens inclusos destacados e condições de pagamento (se aplicável).
  - ROI/ganhos podem aparecer em mini‑charts para contexto.
- Próximos Passos
  - 3 passos: Alinhamento final → Aprovação → Início do Projeto.
  - Evitar CTAs de conversão (é uma proposta, não landing de marketing).

Modais — Conteúdo e Formato
- Componente
  - Em `Modal.tsx`: `size="full"` para fluxos e `size="md"` para comparativos/briefings.
  - Acessibilidade: tecla ESC fecha; overlay click fecha; título claro.
- Modais de Fluxo (`solution`)
  - Kinds disponíveis em `FlowDiagram.tsx`: `agendamento`, `triagem-noshow`, `faq`.
  - Cada fluxo deve conter etapas legíveis e arestas animadas; evitar poluição visual.
- CRM (modal `crm`)
  - Objetivo: visualizar funis, estágios e exemplos de leads/valores.
  - Sugestões: KPIs iniciais, estágios descritivos, tags por especialidade, origem do lead.
- Dashboard (modal `dashboard`)
  - Abas: visão geral, funil de conversão completo, visão de agendamentos.
  - Itens: KPIs, gráficos de barras/funil, filtros por período/canal (exemplo textual/visual).
- Fases do Projeto (modal `phases`)
  - Para cada fase: objetivos, atividades, integrações (se houver), entregáveis, critérios de aceite, riscos e premissas.
- Valor/Comparativo (modal `valueinfo`)
  - Comparar “sem visibilidade” vs “com visibilidade total” com KPIs de exemplo.
  - Inclua nota: números são ilustrativos, ajustar conforme dados reais do cliente.
- Ganhos/Insights/Relatórios (modais `conquistas`, `inteligencia`, `insights`, `relatorios`)
  - “Conquistas”: efeitos práticos (ex.: redução de no‑show, melhora de conversão).
  - “Inteligência”: dados em tempo real, alertas, priorização de oportunidades.
  - “Insights”: recomendações acionáveis com base em dados (ex.: horários ociosos, canais performáticos).
  - “Relatórios”: cruzamento de dados (marketing/CRM/fechamento), visão executiva e granular.

Fluxos (React Flow) — Como editar/criar
- Adicionar novo fluxo:
  - Em `src/app/components/FlowDiagram.tsx`:
    - Atualize o tipo `FlowKind` para incluir o novo identificador.
    - Adicione um novo case em `nodesAndEdges(kind)` com `nodes` e `edges`.
  - Em `src/app/page.tsx`:
    - Adicione um card na seção “AGENTES DE IA” mapeando para o novo `FlowKind`.
    - O botão “Ver fluxo” deve abrir `{ type: "solution", kind: <novoKind> }`.
- Boas práticas de fluxos:
  - 6–12 nós por diagrama; títulos curtos; cores consistentes com o tema.
  - Use `fitViewOptions` para garantir enquadramento.

Estilo e Convenções
- Linguagem: Português (pt‑BR), tom consultivo e direto.
- Código: TypeScript; nomes descritivos; evitar variáveis de uma letra; sem comentários supérfluos.
- CSS: priorize tokens do tema (`globals.css`) em vez de cores hardcoded.
- Ícones Lucide: tamanho 16–20 px nos cards; consistência visual.

Acessibilidade
- Forneça `alt` descritivo para logos/imagens.
- Contraste mínimo AA para texto/botões.
- Respeito a `prefers-reduced-motion` quando introduzir novas animações.

Desempenho
- Prefira SVG para logos e ícones; otimize PNG/JPG.
- Evite imagens pesadas no hero; reuso de assets em `public/branding/`.
- React Flow já é carregado via dynamic import (sem SSR) — mantenha.

Repositório (Local)
- Este template começa sem remoto. Quando necessário, crie o remoto e configure `origin`.
- Commits: mensagens curtas e descritivas (ex.: `feat:`, `chore:`, `fix:`).

Checklist de Entrega
- [ ] Atualizar `preparedFor` e `proposalDate` em `src/app/page.tsx`.
- [ ] Substituir `public/branding/logo-placeholder.svg` pela logo do cliente.
- [ ] Ajustar `--prime-*` em `src/app/globals.css` conforme a identidade do cliente.
- [ ] Revisar textos de seções e modais para o contexto do cliente.
- [ ] Validar contraste e responsividade (mobile/desktop).
- [ ] Conferir métricas/valores e adicionar disclaimer quando necessário.
