Proposta — Dr. Maurício Ernesto • Agentes de IA para Atendimento Comercial

Stack: Next.js 15 (App Router) + Tailwind v4 + React Flow + Framer Motion + Lucide.

Principais recursos
- Página contínua com transições suaves entre seções (sensação de slides)
- Modais animados com overlay/blur e ESC para fechar
- Fluxogramas interativos (React Flow) com grid, minimapa e controles
- Mini‑charts em SVG para ROI e tendência de leads

Como rodar (porta 3001)
- Requisitos: Node 18+
- Instalação: `npm install`
- Dev: `npm run dev` → http://localhost:3001
- Build: `npm run build`
- Start prod: `npm start`

Estrutura (onde customizado)
- `src/app/page.tsx` — hero, seções e modais. `preparedFor = "Dr. Maurício Ernesto"` e data já setados.
- `src/app/components/Modal.tsx` — modal animado (`size="full" | "md"`).
- `src/app/components/FlowDiagram.tsx` — fluxos dos agentes com “Agenda Unificada (Tasy + Particular)”.
- `src/app/globals.css` — tokens de tema adaptados ao cliente (`#041e42` e `#41b6e6`).
- `public/branding/logo.svg` — logo do Dr. Maurício (referência ao SVG oficial do site).

Seções (resumo)
- Hero → “Agentes de IA para Atendimento Comercial”.
- Desafio Atual → do doc (volume ~150/dia, agendas desconectadas Tasy+particular, zero visibilidade, follow‑up).
- Nossas Soluções → SDR Qualificador, FAQ, Anti No‑Show, CRM + Agenda Unificada + Dashboard.
- Fluxo e Ferramentas → fluxos (Agendamento, Pré‑triagem/No‑show, FAQ) e ferramentas (CRM, Dashboard).
- Ganhos Esperados → números do doc (conversão 15%→39%, no‑show 25%→10%, 1.750 consultas/mês etc.).
- Plano de Implantação → 4 fases (Imersão/Arquitetura; Dev Agentes; Integrações/Painéis; Go‑Live).
- Investimento → módulos e pacote full conforme doc.
- Próximos Passos → três passos, sem CTAs comerciais.

Scripts úteis
- `npm run dev` — dev (porta 3001)
- `npm run build` — build (Turbopack)
- `npm start` — produção

Observações
- Fluxos usam estado controlado (`useNodesState`, `useEdgesState`) e `onConnect` com `addEdge`.
- Ícones: Lucide (CalendarCheck2, BellRing, MessageSquare, Stethoscope, KanbanSquare, BarChart3, BrainCircuit).

Identidade visual
- Cores definidas em `src/app/globals.css`: `--prime-primary: #041e42` e `--prime-accent: #41b6e6`.
- Logo em `public/branding/logo.svg` (SVG oficial incluído localmente).
