"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  CalendarCheck2,
  BellRing,
  MessageSquare,
  Stethoscope,
  KanbanSquare,
  BarChart3,
  Trophy,
  Brain,
  Lightbulb,
  FileBarChart,
} from "lucide-react";
import Modal from "./components/Modal";
import { type FlowKind } from "./components/FlowDiagram";

// Atualize estes campos para cada nova proposta
const preparedFor = "Dr. Maurício Ernesto";
const proposalDate = "Outubro 2025";

const FlowDiagramLazy = dynamic<{ kind: FlowKind }>(
  () => import("./components/FlowDiagram"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center text-sm text-slate-500">
        Carregando fluxo...
      </div>
    ),
  }
);

type ModalKind =
  | { type: "solution"; kind: FlowKind; title: string }
  | { type: "crm" }
  | { type: "dashboard" }
  | { type: "phases"; phase: 1 | 2 | 3 | 4 }
  | { type: "valueinfo" }
  | { type: "conquistas" }
  | { type: "inteligencia" }
  | { type: "insights" }
  | { type: "relatorios" }
  | null;

export default function Home() {
  const [modal, setModal] = useState<ModalKind>(null);

  // soluções listadas diretamente nas seções (sem uso aqui)

  return (
    <div className="min-h-screen">
      {/* Top nav for smooth anchors */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src="/branding/logo.svg" alt={`Logo ${preparedFor}`} width={120} height={40} />
          </div>
          <nav className="ml-auto hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-prime" href="#desafio">Desafio</a>
            <a className="hover:text-prime" href="#solucoes">Soluções</a>
            <a className="hover:text-prime" href="#fluxos">Fluxos</a>
            <a className="hover:text-prime" href="#plano">Plano</a>
            <a className="hover:text-prime" href="#ganhos">Ganhos</a>
            <a className="hover:text-prime" href="#investimento">Investimento</a>
            <a className="hover:text-prime" href="#cta">Próximos passos</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="section bg-gradient-to-b from-white to-slate-50" id="hero">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="hero-kicker">PROPOSTA DE SOLUÇÃO COM IA</span>
            <h1 className="mt-3 text-5xl md:text-7xl font-bold text-prime leading-tight">
              Agentes de IA para Atendimento Comercial
            </h1>
            <p className="subtitle mt-4">
              Automação ponta a ponta para captação, agendamento, confirmação, follow-up e
              inteligência comercial.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="badge">Preparado para: {preparedFor}</span>
              <span className="badge">Data: {proposalDate}</span>
            </div>
            {/* Botões removidos conforme ajustes */}
          </div>
          <div className="flex justify-center">
            <Image src="/branding/logo.svg" width={420} height={150} alt={`Logo ${preparedFor}`} className="drop-shadow-md" />
          </div>
        </div>
      </section>

      {/* (Plano de Implantação movido para após Ganhos) */}

      {/* DESAFIO ATUAL */}
      <section className="section" id="desafio">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title">Desafio Atual</h2>
          <p className="subtitle mt-2">Contexto do consultório do {preparedFor}: alto volume de leads, agendas desconectadas e baixa visibilidade comercial.</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-prime">Alto volume sem qualificação</h3>
              <ul className="mt-3 space-y-1 text-slate-700">
                <li>• ~150 leads/dia; 1 lead a cada 3,2 min</li>
                <li>• Qualificação básica consome 80% do tempo</li>
                <li>• Falta priorização por urgência/aderência</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-prime">Agendas desconectadas</h3>
              <ul className="mt-3 space-y-1 text-slate-700">
                <li>• Hospital IOP (Tasy) vs agenda particular</li>
                <li>• Conflitos e sobreposições</li>
                <li>• Dificuldade de encaixes e remarcações</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-prime">Zero visibilidade comercial</h3>
              <ul className="mt-3 space-y-1 text-slate-700">
                <li>• Não mede taxa de qualificação/conversão</li>
                <li>• Gargalos desconhecidos no funil</li>
                <li>• Sem previsão de no-show</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-prime">Tempo de resposta e follow-up</h3>
              <ul className="mt-3 space-y-1 text-slate-700">
                <li>• Leads fora do horário se perdem</li>
                <li>• Falta follow-up estruturado</li>
                <li>• Leads qualificados esfriam sem ação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUÇÕES (valor) */}
      <section className="section bg-slate-50" id="solucoes">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title">Nossas Soluções</h2>
          <p className="subtitle mt-2">Soluções integradas para qualificar, agendar, reduzir no‑show e dar visibilidade total (CRM + Agenda Unificada + Dashboard).</p>

          <div className="mt-8">
            <div className="card">
              <div className="font-bold text-prime">4 soluções para o consultório do {preparedFor}</div>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="card">
                <div className="font-semibold text-prime flex items-center gap-2"><CalendarCheck2 className="h-5 w-5"/> SDR Qualificador + Agendamento (WhatsApp)</div>
                <ul className="mt-2 text-slate-700 space-y-1">
                  <li>• Atendimento 24/7 com resposta imediata</li>
                  <li>• Qualificação automática (particular × convênio)</li>
                  <li>• Validação de convênios e proposta de horários</li>
                </ul>
              </div>
              <div className="card">
                <div className="font-semibold text-prime flex items-center gap-2"><MessageSquare className="h-5 w-5"/> FAQ Inteligente (Educacional)</div>
                <ul className="mt-2 text-slate-700 space-y-1">
                  <li>• Procedimentos, recuperação e valores/convênios</li>
                  <li>• Sobre o médico, localização e horários</li>
                  <li>• Convida a agendar ao final (conversão)</li>
                </ul>
              </div>
              <div className="card">
                <div className="font-semibold text-prime flex items-center gap-2"><BellRing className="h-5 w-5"/> Anti No‑Show + Follow‑Up</div>
                <ul className="mt-2 text-slate-700 space-y-1">
                  <li>• Lembretes D‑2, D‑1 e D‑2h + confirmação</li>
                  <li>• Reagendamento automático e fila de espera</li>
                  <li>• Follow‑up pós‑consulta (NPS, retornos, exames)</li>
                </ul>
              </div>
              <div className="card">
                <div className="font-semibold text-prime flex items-center gap-2"><Stethoscope className="h-5 w-5"/> CRM + Agenda Unificada + Dashboard</div>
                <ul className="mt-2 text-slate-700 space-y-1">
                  <li>• Unifica Hospital IOP (Tasy) + particular</li>
                  <li>• Funis, tags e histórico completo no CRM</li>
                  <li>• KPIs, funil e relatórios executivos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="card">
              <div className="font-semibold text-prime">SOLUÇÕES INTELIGENTES</div>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>✅ Dashboard em tempo real</li>
                <li>✅ CRM com histórico completo</li>
                <li>✅ Análise preditiva (prevê problemas)</li>
                <li>✅ Insights completos com oportunidades</li>
                <li>✅ Cruzamento de dados entre Marketing Orgânico, Pago, CRM e Fechamento</li>
                <li>✅ Relatórios executivos</li>
              </ul>
              <div className="mt-4 text-slate-600">Gestão baseada em dados, não em achismo.</div>
              <button className="mt-4 btn-primary" onClick={() => setModal({ type: "valueinfo" })}>Ver mais</button>
            </div>
            <div className="card">
              <div className="font-semibold text-prime">CONFIABILIDADE E SEGURANÇA</div>
              <ul className="mt-3 space-y-4 text-slate-700">
                <li>• Fallback: humanos assumem quando necessário.</li>
                <li>• Monitoramento (alertas em tempo real, playbook e reprocessamento).</li>
                <li>• Privacidade &amp; LGPD</li>
                <li>• Segurança dos dados de ponta a ponta</li>
                <li>• Suporte (com SLA pré-definido).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FLUXO E FERRAMENTAS */}
      <section className="section" id="fluxos">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title">Fluxo e Ferramentas Inteligentes</h2>
          <p className="subtitle mt-2">Fluxograma dos agentes e exemplos das ferramentas</p>
          <h3 className="mt-8 font-bold text-prime">AGENTES DE IA</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6">
            {[
              { key: "agendamento" as FlowKind, title: "SDR Qualificador + Agendamento" },
              { key: "faq" as FlowKind, title: "FAQ Inteligente (Educacional)" },
              { key: "triagem-noshow" as FlowKind, title: "Anti No‑Show + Follow‑Up" },
            ].map((s) => (
              <div key={s.key} className="card flex flex-col justify-between">
                <div className="font-semibold text-prime">{s.title}</div>
                <button className="mt-4 btn-primary" onClick={() => setModal({ type: "solution", kind: s.key, title: s.title })}>Ver fluxo</button>
              </div>
            ))}
          </div>

          <h3 className="mt-10 font-bold text-prime">FERRAMENTAS</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-6">
            <div className="card flex flex-col justify-between">
              <div>
                <div className="font-semibold text-prime flex items-center gap-2"><KanbanSquare className="h-5 w-5"/> CRM Comercial</div>
                <div className="mt-2 text-slate-700 text-sm">Funis com estágios, histórico de conversas, tags por procedimento e origem do lead</div>
              </div>
              <button className="mt-4 btn-primary" onClick={() => setModal({ type: "crm" })}>Ver exemplo</button>
            </div>
            <div className="card flex flex-col justify-between">
              <div>
                <div className="font-semibold text-prime flex items-center gap-2"><BarChart3 className="h-5 w-5"/> Dashboard</div>
                <div className="mt-2 text-slate-700 text-sm">Visão geral, funil completo e agendamentos com KPIs e previsões de no‑show</div>
              </div>
              <button className="mt-4 btn-primary" onClick={() => setModal({ type: "dashboard" })}>Ver exemplo</button>
            </div>
          </div>
        </div>
      </section>

      {/* PLANO DE IMPLANTAÇÃO */}
      <section className="section bg-slate-50" id="plano">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title">Plano de Implantação</h2>
          <p className="subtitle mt-2">Do mapeamento à implementação: 4 fases estruturadas</p>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { phase: 1, title: "Imersão e Arquitetura", icon: "🔍" },
          { phase: 2, title: "Desenvolvimento dos Agentes", icon: "⚙️" },
          { phase: 3, title: "Integrações e Painéis", icon: "🔗" },
          { phase: 4, title: "Testes e Go-Live", icon: "🚀" },
        ].map((item) => (
          <div key={item.phase} className="card hover:shadow-md transition-shadow cursor-pointer group" onClick={() => setModal({ type: "phases", phase: item.phase as 1 | 2 | 3 | 4 })}>
            <div className="text-2xl md:text-3xl mb-2">{item.icon}</div>
            <div className="text-base md:text-lg font-semibold text-prime mb-1">FASE {item.phase}</div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
            <div className="text-prime text-sm font-semibold group-hover:underline">Ver detalhes →</div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-base text-slate-600">As estimativas podem ser alteradas de acordo com a complexidades dos fluxos demandados pelo cliente</div>
        </div>
      </section>

      {/* GANHOS (quatro cartões) */}
      <section className="section" id="ganhos">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title">Ganhos Esperados</h2>
          <p className="subtitle mt-2">Resultados concretos e mensuráveis para {preparedFor}</p>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {/* Cartão 1: O que você conquista */}
            <div className="card hover:shadow-md transition-shadow">
              <div className="text-xl md:text-2xl font-bold text-prime mb-2 flex items-center gap-2"><Trophy className="h-5 w-5 text-prime"/> O que você conquista</div>
              <div className="text-slate-700 space-y-2 mb-4">
                <div>🕘 Atendimento 24/7 no WhatsApp — sem perda de leads fora do horário</div>
                <div>🤖 Qualificação e FAQ automatizados — recepção foca no que importa</div>
                <div>📅 Agenda unificada (IOP Tasy + particular) — menos conflitos e encaixes rápidos</div>
                <div>🔔 Confirmações e reagendamentos automáticos — redução de faltas e ocupação melhor</div>
                <div>🔄 Follow‑up estruturado — retornos/exames e acompanhamento pós‑procedimento</div>
              </div>
              <button className="btn-primary" onClick={() => setModal({ type: "conquistas" })}>Ver todos os ganhos →</button>
            </div>

            {/* Cartão 2: Inteligência em tempo real */}
            <div className="card hover:shadow-md transition-shadow">
              <div className="text-xl md:text-2xl font-bold text-prime mb-2 flex items-center gap-2"><Brain className="h-5 w-5 text-prime"/> Inteligência em tempo real</div>
              <div className="text-slate-700 space-y-2 mb-4">
                <div>📊 Taxa de conversão de leads</div>
                <div>🎯 Especialidades mais procuradas</div>
                <div>⚠️ Previsão de no-show</div>
              </div>
              <button className="btn-primary" onClick={() => setModal({ type: "inteligencia" })}>Ver análises completas →</button>
            </div>

            {/* Cartão 3: Exemplos de insights */}
            <div className="card hover:shadow-md transition-shadow">
              <div className="text-xl md:text-2xl font-bold text-prime mb-2 flex items-center gap-2"><Lightbulb className="h-5 w-5 text-prime"/> Exemplos de insights</div>
              <div className="text-slate-700 text-sm space-y-2 mb-4">
                <div>💡 &quot;35% dos leads chegam no domingo, mas conversão 20% menor → Bot responde na hora&quot;</div>
                <div>💡 &quot;18 orçamentos de cirurgia, só 4 fecharam por preço → Criar parcelamento 6x&quot;</div>
              </div>
              <button className="btn-primary" onClick={() => setModal({ type: "insights" })}>Ver mais insights →</button>
            </div>

            {/* Cartão 4: Relatórios avançados */}
            <div className="card hover:shadow-md transition-shadow">
              <div className="text-xl md:text-2xl font-bold text-prime mb-2 flex items-center gap-2"><FileBarChart className="h-5 w-5 text-prime"/> Relatórios avançados</div>
              <div className="text-slate-700 space-y-2 mb-4">
                <div>🔗 Cruzamento multicanal completo</div>
                <div>🎯 Clusterização de pacientes por perfil</div>
                <div>📊 Jornada do paciente ponta a ponta</div>
              </div>
              <button className="btn-primary" onClick={() => setModal({ type: "relatorios" })}>Ver relatórios →</button>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTIMENTO - adaptado ao documento de arquitetura */}
      <section className="section" id="investimento">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title">Investimento</h2>
          <p className="subtitle mt-2">Soluções Modulares ou Pacote Completo</p>

          {/* Linha superior (modelo1): 3 cards com destaque no centro */}
          <div className="mt-8 grid md:grid-cols-3 gap-6 items-stretch">
            {/* Esquerda - FAQ Inteligente */}
            <div className="card flex flex-col">
              <div className="text-prime font-bold">FAQ Inteligente</div>
              <div className="mt-3 text-slate-800 space-y-2">
                <div>
                  <div className="text-slate-600 text-sm">Investimento Único (Setup + Dev)</div>
                  <div className="text-xl font-bold">R$ 10.000,00</div>
                </div>
                <div>
                  <div className="text-slate-600 text-sm">Mensalidade</div>
                  <div className="text-lg font-semibold">R$ 800,00/mês</div>
                </div>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Agente FAQ especialista</li>
                  <li>• Base de conhecimento completa</li>
                  <li>• Integração com WhatsApp</li>
                  <li>• Métricas de conversão FAQ→Lead</li>
                </ul>
              </div>
              <div className="mt-6 h-px bg-slate-200" />
            </div>

            {/* Centro - destaque (SDR Qualificador + Agendamento) */}
            <div className="card flex flex-col ring-2 ring-prime shadow-lg md:-mt-3">
              <div className="text-prime font-extrabold">SDR Qualificador + Agendamento</div>
              <div className="mt-3 text-slate-800 space-y-2">
                <div>
                  <div className="text-slate-600 text-sm">Investimento Único (Setup + Dev)</div>
                  <div className="text-2xl font-extrabold">R$ 20.000,00</div>
                </div>
                <div>
                  <div className="text-slate-600 text-sm">Mensalidade</div>
                  <div className="text-xl font-bold">R$ 2.200,00/mês</div>
                </div>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Agente Orquestrador + SDR (Particular/Convênio)</li>
                  <li>• Validação de convênios</li>
                  <li>• Integração Omnichannel + CRM</li>
                  <li>• Dashboard essencial</li>
                </ul>
              </div>
              <div className="mt-6 h-px bg-slate-200" />
            </div>

            {/* Direita - Anti No‑Show */}
            <div className="card flex flex-col">
              <div className="text-prime font-bold">Anti No‑Show</div>
              <div className="mt-3 text-slate-800 space-y-2">
                <div>
                  <div className="text-slate-600 text-sm">Investimento Único (Setup + Dev)</div>
                  <div className="text-xl font-bold">R$ 10.000,00</div>
                </div>
                <div>
                  <div className="text-slate-600 text-sm">Mensalidade</div>
                  <div className="text-lg font-semibold">R$ 1.000,00/mês</div>
                </div>
                <ul className="mt-2 text-sm text-slate-700 space-y-1">
                  <li>• Confirmações D‑2/D‑1/D‑2h</li>
                  <li>• Reagendamento inteligente + fila de espera</li>
                  <li>• Follow‑up pós‑consulta</li>
                  <li>• Integração com CRM + métricas de no‑show</li>
                </ul>
              </div>
              <div className="mt-6 h-px bg-slate-200" />
            </div>
          </div>

          {/* Linha inferior (modelo2): 2 cards */}
          <div className="mt-8 grid md:grid-cols-2 gap-6 items-stretch">
            {/* Solução completa (Full) */}
            <div className="card flex flex-col">
              <div className="text-prime font-bold">Solução Full — Pacote Completo</div>
              <div className="mt-3 text-slate-800 space-y-2">
                <div className="text-slate-600 text-sm">Investimento Único</div>
                <div className="text-2xl font-extrabold">De R$ 40.000 → R$ 25.000</div>
                <div className="text-slate-600 text-sm">Mensalidade</div>
                <div className="text-lg font-semibold">De R$ 4.000/mês → R$ 2.500/mês</div>
                <div className="text-slate-700 text-sm mt-2">Inclui: SDR + FAQ + No‑Show + CRM + Agenda Unificada + Dashboard</div>
                <div className="mt-3 text-sm text-slate-700">
                  <div className="font-semibold text-slate-800">Extras</div>
                  <ul className="mt-2 space-y-1">
                    <li>• Treinamento (8h) e suporte 60 dias</li>
                    <li>• Acompanhamento mensal (3 meses)</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 h-px bg-slate-200" />
            </div>

            {/* Condições de Pagamento */}
            <div className="card flex flex-col">
              <div className="text-prime font-bold">Condições de Pagamento</div>
              <div className="mt-3 text-slate-800 space-y-3">
                <div className="text-sm">
                  <div className="font-semibold text-slate-800">Investimento Único</div>
                  <ul className="mt-1 space-y-1 text-slate-700">
                    <li>• À vista (5% de desconto)</li>
                    <li>• 5 parcelas de R$ 5.000</li>
                    <li>• 3x sem juros (cartão corporativo)</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-slate-800">Mensalidade</div>
                  <ul className="mt-1 space-y-1 text-slate-700">
                    <li>• Inicia no mês seguinte ao go‑live</li>
                    <li>• Faturamento via boleto ou PIX</li>
                  </ul>
                </div>
                <div className="text-xs text-slate-600">Incluso: Infraestrutura, suporte (SLA 24h úteis), manutenção, segurança, backup e monitoramento 24/7.</div>
              </div>
              <div className="mt-6 h-px bg-slate-200" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50" id="cta">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="section-title">Próximos Passos</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { title: "Alinhamento Final", desc: "Refinamento dos requisitos e expectativas" },
              { title: "Aprovação da Proposta", desc: "Formalização do acordo e início do projeto" },
              { title: "Início do Projeto", desc: "Kick-off e primeiros desenvolvimentos" },
            ].map((s) => (
              <div key={s.title} className="card">
                <h3 className="text-lg font-semibold text-prime">{s.title}</h3>
                <p className="mt-2 text-slate-700">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTAs removidos */}

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
        Convert.AI | Soluções em Automações de IA
      </footer>

      {/* MODALS */}
      <Modal
        open={modal?.type === "solution"}
        onClose={() => setModal(null)}
        title={(modal && modal.type === "solution" && modal.title) || "Fluxo"}
        scrollContent={false}
      >
        <div className="h-full">
          {modal && modal.type === "solution" ? (
            <FlowDiagramLazy kind={modal.kind} />
          ) : null}
        </div>
      </Modal>

      {/* Modal "Gestão às cegas vs Gestão inteligente" (médio) */}
      <Modal open={modal?.type === "valueinfo"} onClose={() => setModal(null)} title="Gestão às cegas vs Gestão inteligente" size="md">
        <div className="p-4 md:p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-slate-200 p-4 bg-white">
              <div className="font-bold text-rose-600">SEM VISIBILIDADE</div>
              <div className="mt-3 text-slate-700 text-sm">Antes de implementar a solução</div>
              <ul className="mt-3 space-y-1 text-slate-700 text-sm">
                <li>• Conversão: 15%</li>
                <li>• No‑show: 25%</li>
                <li>• Consultas/mês: 675</li>
                <li>• Leads perdidos: ~2.250/mês</li>
                <li>• Receita mensal: R$ 270.000</li>
              </ul>
              <div className="mt-3 text-slate-800 text-sm">Decisões: no achismo, reativas, pouca previsibilidade</div>
            </div>
            <div className="rounded-lg border border-slate-200 p-4 bg-white">
              <div className="font-bold text-emerald-600">COM VISIBILIDADE TOTAL</div>
              <div className="mt-3 text-slate-700 text-sm">Depois de implantar IA + CRM + Dashboard</div>
              <ul className="mt-3 space-y-1 text-slate-700 text-sm">
                <li>• Conversão: 39% (+160%)</li>
                <li>• No‑show: 10% (−60%)</li>
                <li>• Consultas/mês: 1.750 (+1.075)</li>
                <li>• Leads perdidos: ~810/mês (−64%)</li>
                <li>• Receita mensal: R$ 700.000 (+R$ 430.000)</li>
              </ul>
              <div className="mt-3 text-slate-800 text-sm">Decisões: baseadas em dados, proativas, com previsibilidade</div>
            </div>
          </div>
          <div className="mt-4 text-center text-slate-600 text-xs">Números ilustrativos do documento de arquitetura (ajustar conforme dados reais do período).</div>
        </div>
      </Modal>

      <Modal open={modal?.type === "crm"} onClose={() => setModal(null)} title="CRM Comercial">
        <CRMModalContent />
      </Modal>

      <Modal open={modal?.type === "dashboard"} onClose={() => setModal(null)} title="Dashboard">
        <DashboardModalContent />
      </Modal>

      {/* Modal Fases do Projeto */}
      <Modal
        open={modal?.type === "phases"}
        onClose={() => setModal(null)}
        title={modal?.type === "phases" ? `Fase ${modal.phase}: Detalhamento` : "Fases do Projeto"}
        size="md"
      >
        <PhaseDetailModalContent phase={modal?.type === "phases" ? modal.phase : 1} />
      </Modal>

      {/* Modais da Seção Ganhos */}
      <Modal open={modal?.type === "conquistas"} onClose={() => setModal(null)} title="O Que Você Conquista">
        <ConquistasModalContent />
      </Modal>

      <Modal open={modal?.type === "inteligencia"} onClose={() => setModal(null)} title="Inteligência em Tempo Real">
        <InteligenciaModalContent />
      </Modal>

      <Modal open={modal?.type === "insights"} onClose={() => setModal(null)} title="Exemplos de Insights Acionáveis">
        <InsightsModalContent />
      </Modal>

      <Modal open={modal?.type === "relatorios"} onClose={() => setModal(null)} title="Relatórios Avançados com Cruzamento de Dados">
        <RelatoriosModalContentDoc />
      </Modal>
    </div>
  );
}

// CRM renovado com menu lateral e 3 funis (estilo Kommo)
function CRMModalContent() {
  const [funil, setFunil] = useState<"principal" | "followup" | "agendados">("principal");
  type Lead = { id: number; nome: string; especialidade: string; valor: number; origem?: string; tempo?: string; horario?: string; status?: string };

  const pacientes = {
    principal: {
      novo: [
        { id: 1, nome: "Maria Silva", especialidade: "Lesão LCA", valor: 450, origem: "WhatsApp", tempo: "2h" },
        { id: 2, nome: "João Santos", especialidade: "Dor no Joelho", valor: 380, origem: "Instagram", tempo: "5h" },
        { id: 3, nome: "Ana Costa", especialidade: "Menisco", valor: 320, origem: "Google", tempo: "1d" },
      ],
      qualificado: [
        { id: 4, nome: "Pedro Oliveira", especialidade: "Artroplastia", valor: 3500, origem: "Indicação", tempo: "3h" },
        { id: 5, nome: "Carla Mendes", especialidade: "Artrose", valor: 850, origem: "WhatsApp", tempo: "1d" },
        { id: 6, nome: "Lucas Ferreira", especialidade: "Células‑Tronco", valor: 420, origem: "Facebook", tempo: "2d" },
      ],
      agendado: [
        { id: 7, nome: "Beatriz Lima", especialidade: "Artroscopia", valor: 520, origem: "Instagram", tempo: "4h" },
        { id: 8, nome: "Rafael Costa", especialidade: "Lesão LCA", valor: 680, origem: "WhatsApp", tempo: "1d" },
      ],
      confirmado: [
        { id: 9, nome: "Julia Alves", especialidade: "Meniscectomia", valor: 390, origem: "Indicação", tempo: "6h" },
        { id: 10, nome: "Marcos Rocha", especialidade: "Reconstrução LCA", valor: 2800, origem: "Google", tempo: "2d" },
      ],
    },
    followup: {
      aguardando: [
        { id: 11, nome: "Fernanda Silva", especialidade: "Artrose", valor: 750, origem: "WhatsApp", tempo: "3d" },
        { id: 12, nome: "Roberto Lima", especialidade: "Dor no Joelho", valor: 480, origem: "Instagram", tempo: "5d" },
      ],
      contatado: [
        { id: 13, nome: "Camila Santos", especialidade: "Lesão Meniscal", valor: 420, origem: "Facebook", tempo: "1d" },
        { id: 14, nome: "Diego Costa", especialidade: "Ruptura LCA", valor: 350, origem: "Google", tempo: "2d" },
      ],
      reengajado: [
        { id: 15, nome: "Patricia Mendes", especialidade: "Artroplastia", valor: 3200, origem: "Indicação", tempo: "4d" },
      ],
      perdido: [
        { id: 16, nome: "Gustavo Alves", especialidade: "Dor no Joelho", valor: 680, origem: "WhatsApp", tempo: "15d" },
      ],
    },
    agendados: {
      hoje: [
        { id: 17, nome: "Amanda Rocha", especialidade: "Condromalácia", valor: 390, horario: "09:00", status: "Confirmado" },
        { id: 18, nome: "Felipe Santos", especialidade: "Lesão LCA", valor: 520, horario: "10:30", status: "Confirmado" },
        { id: 19, nome: "Isabela Costa", especialidade: "Artrose", valor: 450, horario: "14:00", status: "Pendente" },
      ],
      amanha: [
        { id: 20, nome: "Thiago Lima", especialidade: "Artroplastia", valor: 2900, horario: "08:00", status: "Confirmado" },
        { id: 21, nome: "Larissa Mendes", especialidade: "Menisco", valor: 420, horario: "11:00", status: "Confirmado" },
      ],
      semana: [
        { id: 22, nome: "Bruno Oliveira", especialidade: "Revisão Pós‑op", valor: 680, horario: "Qua 15:00", status: "Confirmado" },
        { id: 23, nome: "Natalia Silva", especialidade: "Condromalácia", valor: 350, horario: "Qui 09:30", status: "Pendente" },
        { id: 24, nome: "Eduardo Costa", especialidade: "Dor no Joelho", valor: 480, horario: "Sex 16:00", status: "Confirmado" },
      ],
      reagendar: [
        { id: 25, nome: "Vanessa Santos", especialidade: "Artrose", valor: 420, horario: "Cancelado", status: "Reagendar" },
      ],
    },
  };

  const colunas = {
    principal: [
      { key: "novo", label: "Novo", count: pacientes.principal.novo.length, color: "bg-sky-500" },
      { key: "qualificado", label: "Qualificado", count: pacientes.principal.qualificado.length, color: "bg-indigo-500" },
      { key: "agendado", label: "Agendado", count: pacientes.principal.agendado.length, color: "bg-emerald-500" },
      { key: "confirmado", label: "Confirmado", count: pacientes.principal.confirmado.length, color: "bg-violet-500" },
    ],
    followup: [
      { key: "aguardando", label: "Aguardando Follow-up", count: pacientes.followup.aguardando.length, color: "bg-amber-500" },
      { key: "contatado", label: "Contatado", count: pacientes.followup.contatado.length, color: "bg-blue-500" },
      { key: "reengajado", label: "Reengajado", count: pacientes.followup.reengajado.length, color: "bg-emerald-500" },
      { key: "perdido", label: "Perdido", count: pacientes.followup.perdido.length, color: "bg-red-500" },
    ],
    agendados: [
      { key: "hoje", label: "Hoje", count: pacientes.agendados.hoje.length, color: "bg-emerald-500" },
      { key: "amanha", label: "Amanhã", count: pacientes.agendados.amanha.length, color: "bg-blue-500" },
      { key: "semana", label: "Esta Semana", count: pacientes.agendados.semana.length, color: "bg-indigo-500" },
      { key: "reagendar", label: "Reagendar", count: pacientes.agendados.reagendar.length, color: "bg-orange-500" },
    ],
  };

  return (
    <div className="h-full flex bg-white">
      {/* Sidebar */}
      <aside className="w-56 border-r border-slate-200 bg-slate-50 p-4">
        <div className="font-bold text-slate-900 mb-4 text-lg">Funis</div>
        <div className="space-y-2">
          {[
            { key: "principal", label: "Funil Principal", icon: "🎯" },
            { key: "followup", label: "Follow-up", icon: "🔄" },
            { key: "agendados", label: "Agendados", icon: "📅" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFunil(item.key as "principal" | "followup" | "agendados")}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all flex items-center gap-2 ${
                funil === item.key
                  ? "bg-prime text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-8 space-y-3">
          <div className="bg-white border border-slate-200 rounded-lg p-3">
            <div className="text-xs font-medium text-slate-600 uppercase">Total Leads</div>
            <div className="text-2xl font-bold text-prime mt-1">142</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-3">
            <div className="text-xs font-medium text-slate-600 uppercase">Taxa Conversão</div>
            <div className="text-2xl font-bold text-emerald-600 mt-1">67,7%</div>
          </div>
          <div className="bg-white border border-slate-200 rounded-lg p-3">
            <div className="text-xs font-medium text-slate-600 uppercase">Ticket Médio</div>
            <div className="text-2xl font-bold text-slate-900 mt-1">R$ 768</div>
          </div>
        </div>
      </aside>

      {/* Kanban Area */}
      <div className="flex-1 overflow-x-auto p-6">
        <div className="flex gap-4 min-w-max">
          {colunas[funil].map((coluna) => {
            const leadsDaColuna: Lead[] = (pacientes as Record<string, Record<string, Lead[]>>)[funil][
              coluna.key
            ] ?? [];
            return (
              <div key={coluna.key} className="w-80 flex-shrink-0">
                {/* Header da Coluna */}
                <div className={`${coluna.color} text-white rounded-t-lg px-4 py-3 flex items-center justify-between`}>
                  <span className="font-bold">{coluna.label}</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-sm font-semibold">{coluna.count}</span>
                </div>

                {/* Cards */}
                <div className="bg-slate-50 border-x border-b border-slate-200 rounded-b-lg p-3 space-y-3 min-h-[400px]">
                  {leadsDaColuna.map((lead: {id: number; nome: string; especialidade: string; valor: number; origem?: string; tempo?: string; horario?: string; status?: string}) => (
                    <div key={lead.id} className="bg-white rounded-lg border border-slate-200 p-4 hover:shadow-md transition-shadow cursor-pointer">
                      {/* Nome e Valor */}
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-semibold text-slate-900">{lead.nome}</div>
                        <div className="text-sm font-bold text-emerald-600">R$ {lead.valor}</div>
                      </div>

                      {/* Especialidade */}
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-medium text-blue-700 mb-2">
                        🏥 {lead.especialidade}
                      </div>

                      {/* Meta info */}
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-2">
                        {lead.origem && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded">
                            📱 {lead.origem}
                          </span>
                        )}
                        {lead.tempo && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded">
                            ⏱️ {lead.tempo}
                          </span>
                        )}
                        {lead.horario && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded">
                            🕐 {lead.horario}
                          </span>
                        )}
                        {lead.status && (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-semibold ${
                            lead.status === "Confirmado" ? "bg-emerald-100 text-emerald-700" :
                            lead.status === "Pendente" ? "bg-amber-100 text-amber-700" :
                            "bg-orange-100 text-orange-700"
                          }`}>
                            {lead.status}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Add Button */}
                  <button className="w-full py-2 px-4 border-2 border-dashed border-slate-300 rounded-lg text-slate-500 hover:border-prime hover:text-prime transition-colors font-medium text-sm">
                    + Adicionar Lead
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Dashboard modal content renovado (estilo ilp-oficial)
function DashboardModalContent() {
  const [tab, setTab] = useState<"overview" | "funil" | "agendamentos" | "insights">("overview");

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Top Navigation Tabs */}
      <div className="border-b border-slate-200 bg-slate-50 px-6 py-3">
        <div className="flex gap-2 overflow-x-auto">
          {[
            { k: "overview", t: "Visão Geral" },
            { k: "funil", t: "Funil" },
            { k: "agendamentos", t: "Agendamentos" },
            { k: "insights", t: "Insights" },
          ].map((i) => (
            <button
              key={i.k}
              onClick={() => setTab(i.k as "overview" | "funil" | "agendamentos" | "insights")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                tab === i.k
                  ? "bg-prime text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {i.t}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto p-6">
        {tab === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Leads/dia", value: "150", change: "+24%", type: "positive" },
                { label: "Conversão", value: "39%", change: "+160%", type: "positive" },
                { label: "No-show", value: "10%", change: "-60%", type: "positive" },
                { label: "Consultas/mês", value: "1.750", change: "+42%", type: "positive" },
                { label: "Receita", value: "R$ 700k", change: "+42%", type: "positive" },
                { label: "Pipeline", value: "R$ 1,305M", change: "novo", type: "positive" },
                { label: "Qualificação", value: "60%", change: "estável", type: "positive" },
                { label: "Show Rate", value: "90%", change: "+7%", type: "positive" },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">{kpi.label}</div>
                  <div className="mt-2 text-2xl font-bold text-slate-900">{kpi.value}</div>
                  <div className={`mt-1 text-sm font-semibold ${kpi.type === 'positive' ? 'text-emerald-600' : 'text-red-600'}`}>
                    {kpi.change} vs mês anterior
                  </div>
                </div>
              ))}
            </div>

            {/* Distribuições principais */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Distribuição: Particular vs Convênio</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-semibold text-slate-700">Particular</div>
                      <div className="text-slate-600">58% • 2.610</div>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-prime-accent" style={{ width: "58%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-semibold text-slate-700">Convênio</div>
                      <div className="text-slate-600">42% • 1.890</div>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-prime" style={{ width: "42%" }} />
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 mt-2">Base: 4.500 leads/mês (estimativa)</div>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Procedimentos Mais Procurados</h3>
                <div className="space-y-3">
                  {[
                    { nome: "Artroscopia", pct: 38, leads: 1710 },
                    { nome: "Tratamento Artrose", pct: 32, leads: 1440 },
                    { nome: "Artroplastia", pct: 18, leads: 810 },
                    { nome: "Células-Tronco", pct: 12, leads: 540 },
                  ].map((p) => (
                    <div key={p.nome}>
                      <div className="flex items-center justify-between text-sm">
                        <div className="font-semibold text-slate-700">{p.nome}</div>
                        <div className="text-slate-600">{p.pct}% • {p.leads}</div>
                      </div>
                      <div className="h-3 bg-slate-100 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-prime" style={{ width: `${p.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-xs text-slate-500">Números ilustrativos extraídos do documento de arquitetura. Ajustar com dados reais do período.</div>
          </div>
        )}

        {/* Aba "canais" removida nesta proposta */}

        {tab === "funil" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Leads/mês", value: "4.500" },
                { label: "Qualificados", value: "60%" },
                { label: "Agendados", value: "~2.100" },
                { label: "Confirmados", value: "~1.940" },
                { label: "Realizados", value: "1.750" },
                { label: "No-show", value: "10%" },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-white border border-slate-200 rounded-lg p-4">
                  <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">{kpi.label}</div>
                  <div className="mt-2 text-2xl font-bold text-prime">{kpi.value}</div>
                </div>
              ))}
            </div>

            {/* Funil Visual */}
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Funil de Conversão Completo</h3>
              <div className="space-y-4">
                {[
                  { etapa: "Leads", valor: 4500, percentual: 100, cor: "bg-blue-600" },
                  { etapa: "Qualificados", valor: 2700, percentual: 60, cor: "bg-indigo-600" },
                  { etapa: "Agendados", valor: 2100, percentual: 46.7, cor: "bg-violet-600" },
                  { etapa: "Confirmados", valor: 1940, percentual: 43.1, cor: "bg-purple-600" },
                  { etapa: "Realizados", valor: 1750, percentual: 38.9, cor: "bg-fuchsia-600" },
                ].map((item, idx) => (
                  <div key={idx} className="relative">
                    <div className="flex items-center gap-4">
                      <div className="w-32 text-sm font-medium text-slate-700">{item.etapa}</div>
                      <div className="flex-1">
                        <div className="h-10 bg-slate-100 rounded-lg overflow-hidden relative">
                          <div
                            className={`h-full ${item.cor} transition-all duration-500 flex items-center justify-between px-4`}
                            style={{ width: `${item.percentual}%` }}
                          >
                            <span className="text-white font-bold text-sm">{item.valor.toLocaleString()}</span>
                            <span className="text-white font-bold text-sm">{item.percentual.toFixed(1)}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {idx < 4 && (
                      <div className="ml-32 pl-4 mt-1 text-xs text-slate-500">
                        ↓ Perda: {((1 - item.percentual / 100) * 100).toFixed(1)}%
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "agendamentos" && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Realizados (mês)", value: "1.750", status: "positive" },
                { label: "No-show", value: "10%", status: "positive" },
                { label: "Show Rate", value: "90%", status: "positive" },
                { label: "Pipeline", value: "R$ 1,305M", status: "positive" },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-white border border-slate-200 rounded-lg p-4">
                  <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">{kpi.label}</div>
                  <div className="mt-2 text-2xl font-bold text-slate-900">{kpi.value}</div>
                </div>
              ))}
            </div>

            {/* Distribuição Particular/Convênio e Top Convênios */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Particular vs Convênio</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-semibold text-slate-700">Particular</div>
                      <div className="text-slate-600">58% • 2.610</div>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-prime-accent" style={{ width: "58%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-semibold text-slate-700">Convênio</div>
                      <div className="text-slate-600">42% • 1.890</div>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden mt-2">
                      <div className="h-full bg-prime" style={{ width: "42%" }} />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-sm font-semibold text-slate-800 mb-2">Top 3 Convênios</div>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>1. Unimed — 820 leads</li>
                    <li>2. Bradesco — 567 leads</li>
                    <li>3. Servir — 378 leads</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Procedimentos Mais Procurados</h3>
                <div className="space-y-3">
                  {[
                    { nome: "Artroscopia", pct: 38, leads: 1710 },
                    { nome: "Tratamento Artrose", pct: 32, leads: 1440 },
                    { nome: "Artroplastia", pct: 18, leads: 810 },
                    { nome: "Células-Tronco", pct: 12, leads: 540 },
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-semibold text-slate-900">{p.nome}</div>
                        <div className="text-sm text-slate-600">{p.leads} leads</div>
                      </div>
                      <div className="w-28">
                        <div className="h-2 bg-slate-200 rounded">
                          <div className="h-2 bg-prime rounded" style={{ width: `${p.pct}%` }} />
                        </div>
                      </div>
                      <div className="font-bold text-slate-700">{p.pct}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-500">Números ilustrativos do documento de arquitetura; ajustar quando integrar aos dados reais.</div>
          </div>
        )}

        {tab === "insights" && (
          <div className="space-y-6">
            {/* Alert Box */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚠️</div>
                <div className="flex-1">
                  <h4 className="font-bold text-orange-900 text-lg mb-2">Atenção: Oportunidade Crítica</h4>
                  <p className="text-slate-700 mb-3">Ortopedia tem 47 pacientes em fila de espera e 12 horários vagos na próxima semana. Potencial de <span className="font-bold text-orange-700">+R$ 5.640</span> em receita.</p>
                  <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Disparar Campanha Agora
                  </button>
                </div>
              </div>
            </div>

            {/* Insights Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl">📊</div>
                  <h4 className="font-bold text-slate-900">Padrão de Conversão</h4>
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  35% dos leads chegam no domingo com conversão de apenas 28% (vs 48% na segunda-feira). Causa: demora na resposta.
                </p>
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-lg">
                  <div className="font-semibold text-emerald-900 text-sm">💡 Ação Sugerida:</div>
                  <p className="text-sm text-emerald-800 mt-1">Ativar bot com senso de urgência nos fins de semana</p>
                  <div className="text-emerald-700 font-bold mt-2">Ganho potencial: +R$ 25.200/mês</div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl">💎</div>
                  <h4 className="font-bold text-slate-900">Objeção Principal</h4>
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  79% dos leads de cirurgia que não convertem mencionam &quot;preço alto&quot;. Taxa de conversão: apenas 22%.
                </p>
                <div className="bg-sky-50 border border-sky-200 p-3 rounded-lg">
                  <div className="font-semibold text-sky-900 text-sm">💡 Ação Sugerida:</div>
                  <p className="text-sm text-sky-800 mt-1">Oferecer parcelamento 6x antes da objeção</p>
                  <div className="text-sky-700 font-bold mt-2">Ganho potencial: +R$ 18.000/mês</div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl">🎯</div>
                  <h4 className="font-bold text-slate-900">Melhor Canal</h4>
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  Indicações têm 94% de conversão, 4% de no-show e LTV de R$ 3.980 (melhor canal). Atualmente: apenas 13% dos leads.
                </p>
                <div className="bg-purple-50 border border-purple-200 p-3 rounded-lg">
                  <div className="font-semibold text-purple-900 text-sm">💡 Ação Sugerida:</div>
                  <p className="text-sm text-purple-800 mt-1">Criar programa de indicação com R$ 200 de incentivo</p>
                  <div className="text-purple-700 font-bold mt-2">Meta: Dobrar indicações = +R$ 196k/mês</div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl">✅</div>
                  <h4 className="font-bold text-slate-900">Tendência Positiva</h4>
                </div>
                <p className="text-sm text-slate-700 mb-4">
                  Lesões do Joelho aumentaram conversão em 18% (35% → 53%). Motivo: resposta mais rápida no WhatsApp.
                </p>
                <div className="bg-teal-50 border border-teal-200 p-3 rounded-lg">
                  <div className="font-semibold text-teal-900 text-sm">💡 Ação Sugerida:</div>
                  <p className="text-sm text-teal-800 mt-1">Replicar estratégia em outras especialidades</p>
                  <div className="text-teal-700 font-bold mt-2">Continue fazendo!</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente para os detalhes das fases
function PhaseDetailModalContent({ phase }: { phase: 1 | 2 | 3 | 4 }) {
  const phaseData = {
    1: {
      title: "Fase 1: Imersão e Arquitetura",
      items: [
        { title: "Workshop de Imersão", description: "Mapeamento de processos atuais, objeções reais dos pacientes e definição de stakeholders." },
        { title: "Desenho de Fluxos Conversacionais", description: "Fluxograma completo de cada agente (SDR, FAQ, No‑Show) e árvore de decisões." },
        { title: "Arquitetura Técnica de Agentes", description: "Definição da stack, integrações, segurança/LGPD e diagrama de arquitetura." },
        { title: "Prototipagem e Validação", description: "Mockups de conversas-chave e ajustes com base no feedback da equipe." }
      ]
    },
    2: {
      title: "Fase 2: Desenvolvimento dos Agentes",
      items: [
        { title: "Agente Orquestrador + SDR", description: "Qualificação automatizada (particular/convênio), validação de convênios e proposta de horários." },
        { title: "Agente FAQ Educacional", description: "Base de conhecimento (procedimentos, recuperação, valores/convênios, sobre o médico, localização)." },
        { title: "Agente Anti No‑Show", description: "Confirmações D‑2/D‑1/D‑2h, reagendamento e fila de espera." },
        { title: "Teste Guiado (Human‑in‑the‑loop)", description: "Validação ponta a ponta com escala para humano quando necessário." }
      ]
    },
    3: {
      title: "Fase 3: Integrações e Painéis",
      items: [
        { title: "Agenda Unificada", description: "Integração Hospital IOP (Tasy) + agenda particular; prevenção de conflitos e sobreposições." },
        { title: "CRM Comercial", description: "Funis, estágios, tags por especialidade/origem e histórico completo de conversas." },
        { title: "Dashboard Executivo", description: "KPIs, funil completo, previsões de no‑show e relatórios executivos." },
        { title: "Relatórios", description: "Mês atual, pipeline, crescimento vs mês anterior." }
      ]
    },
    4: {
      title: "Fase 4: Go‑Live e Estabilização",
      items: [
        { title: "Go‑Live", description: "Deploy em produção com checklist final, backup e plano de rollback." },
        { title: "Monitoramento 24/7", description: "Acompanhamento de conversas, correção de fluxos e melhoria contínua." },
        { title: "Otimização de Conversões", description: "Ajustes de prompts e respostas FAQ com base em métricas reais." },
        { title: "Treinamento e Handover", description: "Documentação final, playbook e treinamento avançado da equipe." }
      ]
    }
  };

  const data = phaseData[phase];

  return (
    <div className="p-4 md:p-6 space-y-4">
      {data.items.map((item, idx) => (
        <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
          <h4 className="font-bold text-lg text-prime-dark mb-2">{item.title}</h4>
          <p className="text-slate-700 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// Componentes dos modais da seção Ganhos
function ConquistasModalContent() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Ganhos Operacionais</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-emerald-700 mb-2">🕘 Atendimento 24/7</div>
            <div className="text-sm text-slate-700">Leads fora do horário recebem resposta imediata e são encaminhados</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-emerald-700 mb-2">🤖 Automação de tarefas</div>
            <div className="text-sm text-slate-700">Qualificação, dúvidas frequentes e confirmações automatizadas</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-emerald-700 mb-2">📅 Agenda Unificada</div>
            <div className="text-sm text-slate-700">IOP (Tasy) + particular — menos conflitos e sobreposições</div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-emerald-700 mb-2">🔔 Confirmações e Reagendamentos</div>
            <div className="text-sm text-slate-700">Lembretes D‑1 e D‑2h; fila de espera para vagas liberadas</div>
          </div>
          <div className="bg-white p-4 rounded-lg md:col-span-2">
            <div className="font-bold text-emerald-700 mb-2">🔄 Follow‑up e Continuidade</div>
            <div className="text-sm text-slate-700">Retornos, exames e pós‑procedimento sob controle</div>
          </div>
        </div>
        <div className="text-xs text-slate-600 mt-4">Observação: resultados variam conforme mix de casos, volume e agenda disponível.</div>
      </div>
    </div>
  );
}

function InteligenciaModalContent() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="bg-sky-50 border border-sky-200 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-sky-900 mb-4">🧠 Inteligência Completa em Tempo Real</h3>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-sky-700 mb-2">📊 Métricas Operacionais</div>
            <ul className="space-y-1 text-slate-700">
              <li>• Taxa de conversão de leads (geral e por canal)</li>
              <li>• Horários com maior demanda por especialidade</li>
              <li>• Taxa de no-show por dia da semana e horário</li>
              <li>• Tempo médio de resposta aos leads</li>
              <li>• Taxa de ocupação da agenda</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-sky-700 mb-2">🎯 Inteligência Comercial</div>
            <ul className="space-y-1 text-slate-700">
              <li>• Especialidades mais procuradas vs. mais lucrativas</li>
              <li>• Principais objeções dos pacientes por tipo de serviço</li>
              <li>• Ticket médio por canal de origem</li>
              <li>• Oportunidades comerciais não aproveitadas</li>
              <li>• Perfil de pacientes de alto valor (LTV)</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-sky-700 mb-2">⚠️ Análise Preditiva</div>
            <ul className="space-y-1 text-slate-700">
              <li>• Previsão de no-show por paciente (score de risco)</li>
              <li>• Leads com maior probabilidade de conversão</li>
              <li>• Tendências de demanda por especialidade</li>
              <li>• Períodos de baixa conversão esperada</li>
              <li>• Projeção de receita mensal</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <div className="font-bold text-sky-700 mb-2">💰 ROI e Performance</div>
            <ul className="space-y-1 text-slate-700">
              <li>• ROI em tempo real de cada canal de aquisição</li>
              <li>• CAC (Custo de Aquisição de Cliente) por origem</li>
              <li>• LTV (Lifetime Value) por perfil de paciente</li>
              <li>• Performance dos agentes de IA (taxa de resolução)</li>
              <li>• Economia gerada vs. operação manual</li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-sky-100 to-emerald-100 p-4 rounded-lg border-2 border-sky-300">
            <div className="font-bold text-sky-900 text-lg mb-2">✨ Exemplo Prático</div>
            <div className="text-slate-800 text-sm space-y-2">
              <p><strong>Segunda-feira, 9h:</strong> Dashboard mostra que você teve 23 leads no fim de semana, com taxa de conversão de apenas 28% (abaixo da média de 45%).</p>
              <p><strong>Diagnóstico automático:</strong> Leads de fim de semana esfriam porque resposta demora. Sistema sugere: ativar bot para resposta imediata 24/7.</p>
              <p><strong>Ação tomada:</strong> Bot ativado. Semana seguinte, conversão de leads de fim de semana sobe para 42%.</p>
              <p className="text-emerald-700 font-bold">💰 Resultado: +R$ 6.300 em uma semana.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsightsModalContent() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-h-[70vh] overflow-auto">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">Insights notificados via WhatsApp</h3>

        {/* Alerta Crítico 1 */}
        <div className="bg-white border-l-4 border-red-500 p-4 rounded-lg mb-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl">⚠️</span>
            <div className="flex-1">
              <div className="font-bold text-red-700 mb-2">ALERTA 1: No-Show em Alta</div>
              <div className="space-y-2 text-sm text-slate-700">
                <div><strong>O QUE:</strong> Taxa de no-show terça-feira subiu para 38% (média: 23%)</div>
                <div><strong>POR QUE:</strong> 87% das faltas são entre 14h-17h. Pacientes confirmam mas esquecem.</div>
                <div className="text-red-600 font-semibold">💸 IMPACTO: -R$ 12.400 essa semana</div>
                <div className="bg-emerald-50 border border-emerald-200 p-3 rounded mt-2">
                  <div className="font-semibold text-emerald-800 mb-1">✅ AÇÃO SUGERIDA:</div>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Adicionar lembrete EXTRA 2h antes (terças 14-17h)</li>
                    <li>• Ligar para confirmar pacientes de alto valor</li>
                    <li>• Testar reagendamento de terça para outro dia</li>
                  </ul>
                  <div className="text-emerald-700 font-bold mt-2">📈 RESULTADO ESPERADO: Reduzir no-show em 50% = +R$ 6.200/semana</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Oportunidade 1 */}
        <div className="bg-white border-l-4 border-emerald-500 p-4 rounded-lg mb-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl">💎</span>
            <div className="flex-1">
              <div className="font-bold text-emerald-700 mb-2">OPORTUNIDADE 1: Demanda Reprimida</div>
              <div className="space-y-2 text-sm text-slate-700">
                <div><strong>O QUE:</strong> 47 pessoas na fila de espera para Ortopedia. Dra. Santos tem 12 horários vagos próxima semana.</div>
                <div><strong>POR QUE:</strong> Pacientes não sabem da disponibilidade. Recepção não liga para todos.</div>
                <div className="text-emerald-600 font-semibold">💰 OPORTUNIDADE: +R$ 5.640 em 1 semana</div>
                <div className="bg-sky-50 border border-sky-200 p-3 rounded mt-2">
                  <div className="font-semibold text-sky-800 mb-1">✅ AÇÃO SUGERIDA:</div>
                  <ul className="text-slate-700 space-y-1">
                    <li>• Disparar mensagem automática para fila</li>
                    <li>• Priorizar top 20 por ordem de espera</li>
                    <li>• Oferecer 2-3 opções de horário</li>
                  </ul>
                  <div className="text-sky-700 font-bold mt-2">📈 RESULTADO ESPERADO: Preencher 80% das vagas = +R$ 4.512 capturados</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insight Estratégico 1 */}
        <div className="bg-white border-l-4 border-blue-500 p-4 rounded-lg mb-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl">📊</span>
            <div className="flex-1">
              <div className="font-bold text-blue-700 mb-2">INSIGHT 1: Padrão de Conversão</div>
              <div className="space-y-2 text-sm text-slate-700">
                <div><strong>DESCOBERTA:</strong></div>
                <ul className="space-y-1">
                  <li>• 35% dos leads chegam no DOMINGO (maior volume)</li>
                  <li>• Taxa de conversão domingo: 28%</li>
                  <li>• Taxa de conversão segunda: 48%</li>
                  <li>• Diferença: -20 pontos percentuais</li>
                </ul>
                <div className="mt-2"><strong>CAUSA RAIZ:</strong></div>
                <ul className="space-y-1">
                  <li>• Domingo: bot responde, mas sem urgência</li>
                  <li>• Segunda 9h: lead já esfriou, não responde mais</li>
                </ul>
                <div className="text-red-600 font-semibold mt-2">💸 PERDA ATUAL: 52 leads/mês × R$ 450 = -R$ 23.400/mês</div>
                <div className="bg-purple-50 border border-purple-200 p-3 rounded mt-2">
                  <div className="font-semibold text-purple-800 mb-1">✅ SOLUÇÃO:</div>
                  <ol className="text-slate-700 space-y-1 list-decimal pl-5">
                    <li>Bot criar senso de urgência (&quot;só 3 vagas essa semana&quot;)</li>
                    <li>Oferecer agendamento imediato (não &quot;ligo segunda&quot;)</li>
                    <li>Disparo automático segunda 8h se não agendou</li>
                  </ol>
                  <div className="text-purple-700 font-bold mt-2">📈 META: Elevar conversão domingo de 28% → 42% = +R$ 25.200/mês</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Insight Estratégico 2 */}
        <div className="bg-white border-l-4 border-orange-500 p-4 rounded-lg mb-4">
          <div className="flex items-start gap-3">
            <span className="text-3xl">🎯</span>
            <div className="flex-1">
              <div className="font-bold text-orange-700 mb-2">INSIGHT 2: Objeção Principal</div>
              <div className="space-y-2 text-sm text-slate-700">
                <div><strong>DESCOBERTA:</strong></div>
                <ul className="space-y-1">
                  <li>• 18 pedidos de orçamento cirurgia de varizes</li>
                  <li>• Só 4 fecharam (22% de conversão)</li>
                  <li>• 14 não responderam mais</li>
                </ul>
                <div className="mt-2"><strong>ANÁLISE DE CONVERSAS:</strong></div>
                <ul className="space-y-1">
                  <li>• 11 dos 14 mencionaram &quot;preço alto&quot; (79%)</li>
                  <li>• 3 não entenderam o que estava incluso no valor</li>
                </ul>
                <div className="text-red-600 font-semibold mt-2">💸 PERDA: 14 cirurgias × R$ 4.500 = -R$ 63.000 esse mês</div>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded mt-2">
                  <div className="font-semibold text-amber-800 mb-1">✅ SOLUÇÃO:</div>
                  <ol className="text-slate-700 space-y-1 list-decimal pl-5">
                    <li>Bot explicar TUDO incluso no valor (transparência)</li>
                    <li>Mostrar parcelamento em 6x ANTES da objeção</li>
                    <li>Enviar cases de sucesso + depoimentos automaticamente</li>
                    <li>Oferecer consulta gratuita para tirar dúvidas</li>
                  </ol>
                  <div className="text-amber-700 font-bold mt-2">📈 META: Elevar conversão de 22% → 45% = +R$ 18.000/mês</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tendência Positiva */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-300 p-5 rounded-lg">
          <div className="font-bold text-emerald-800 mb-3">✅ TENDÊNCIAS POSITIVAS (Continue Fazendo)</div>
          <div className="space-y-3 text-sm">
            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-emerald-700">Lesão do LCA: Conversão subiu 18% (35% → 53%)</div>
              <div className="text-slate-700 mt-1">→ Motivo: resposta mais rápida no WhatsApp</div>
              <div className="text-emerald-600 font-semibold">→ Replicar: instruir equipe a priorizar esses casos</div>
            </div>

            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-emerald-700">Artroscopia: Zero no‑show essa semana</div>
              <div className="text-slate-700 mt-1">→ Motivo: lembrete D‑2/D‑1/D‑2h funcionando</div>
              <div className="text-emerald-600 font-semibold">→ Avaliar: manter e testar horário do lembrete</div>
            </div>

            <div className="bg-white p-3 rounded">
              <div className="font-semibold text-emerald-700">Artrose: 12 marcações no período (recorde)</div>
              <div className="text-slate-700 mt-1">→ Motivo: conteúdo educacional sobre tratamento conservador</div>
              <div className="text-emerald-600 font-semibold">→ Ação: replicar pauta para Artroplastia</div>
            </div>
          </div>
        </div>

        {/* Resumo Financeiro */}
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 border-2 border-indigo-300 p-5 rounded-lg mt-4">
          <div className="font-bold text-indigo-900 mb-3">💰 RESUMO FINANCEIRO DA SEMANA</div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Oportunidades identificadas:</span>
              <span className="text-2xl font-bold text-indigo-700">+R$ 47.712</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Ações implementadas:</span>
              <span className="text-xl font-bold text-emerald-600">+R$ 18.300 (38%)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-700">Ainda em aberto:</span>
              <span className="text-xl font-bold text-orange-600">+R$ 29.412 (62%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RelatoriosModalContent() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-h-[70vh] overflow-auto">
      <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">📑 Relatórios Avançados no Dashboard</h3>
        <p className="text-slate-600 mb-6">Análises complexas que cruzam dados de múltiplas fontes para gerar insights estratégicos profundos</p>

        {/* Relatório 1: Funil Multicanal */}
        <div className="bg-white border-2 border-blue-200 p-5 rounded-lg mb-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">📊</span>
            <div className="flex-1">
              <div className="font-bold text-blue-700 mb-2">RELATÓRIO 1: Análise de Funil Multicanal</div>
              <p className="text-sm text-slate-600">Da origem até o fechamento: rastreamento completo da jornada do paciente</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Google Ads */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
              <div className="font-bold text-blue-800 mb-3">CANAL: Google Ads</div>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-slate-600">Cliques: <span className="font-semibold text-slate-800">2.847</span></div>
                  <div className="text-slate-600">Investimento: <span className="font-semibold text-slate-800">R$ 8.500</span></div>
                  <div className="text-slate-600">Leads gerados: <span className="font-semibold text-slate-800">427 (15% conversão)</span></div>
                </div>
                <div>
                  <div className="text-slate-600">Agendamentos: <span className="font-semibold text-slate-800">289 (67,7%)</span></div>
                  <div className="text-slate-600">Compareceram: <span className="font-semibold text-slate-800">231 (80%)</span></div>
                  <div className="text-emerald-600 font-bold mt-2">Receita: R$ 387.450</div>
                </div>
              </div>
              <div className="mt-3 bg-white p-3 rounded border border-blue-300">
                <div className="font-semibold text-blue-800">💰 ROI do Canal:</div>
                <div className="text-emerald-600 font-bold">4.458% (R$ 44,58 para cada R$ 1,00)</div>
                <div className="text-slate-600 text-sm mt-1">CAC: R$ 36,80 | LTV: R$ 1.676,84 | LTV/CAC: 45,6x 🚀</div>
              </div>
            </div>

            {/* Instagram */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-4 rounded-lg border border-pink-200">
              <div className="font-bold text-pink-800 mb-3">CANAL: Instagram Orgânico</div>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-slate-600">Alcance: <span className="font-semibold text-slate-800">42.816</span></div>
                  <div className="text-slate-600">Link clicks: <span className="font-semibold text-slate-800">892</span></div>
                  <div className="text-slate-600">Leads gerados: <span className="font-semibold text-slate-800">147 (16,5%)</span></div>
                </div>
                <div>
                  <div className="text-slate-600">Agendamentos: <span className="font-semibold text-slate-800">78 (53%)</span></div>
                  <div className="text-slate-600">Compareceram: <span className="font-semibold text-slate-800">67 (86%) ⭐</span></div>
                  <div className="text-emerald-600 font-bold mt-2">Receita: R$ 84.720</div>
                </div>
              </div>
              <div className="mt-3 bg-white p-3 rounded border border-pink-300">
                <div className="font-semibold text-pink-800">💰 ROI do Canal: ∞% (orgânico)</div>
                <div className="text-slate-600 text-sm mt-1">CAC: R$ 0 | LTV: R$ 1.264,48</div>
                <div className="text-emerald-700 text-sm font-semibold">💡 INSIGHT: Leads Instagram têm MENOR no-show (14% vs 20%)</div>
              </div>
            </div>

            {/* Indicação */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 rounded-lg border border-emerald-200">
              <div className="font-bold text-emerald-800 mb-3">CANAL: Indicações (Word of Mouth)</div>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-slate-600">Indicações: <span className="font-semibold text-slate-800">89</span></div>
                  <div className="text-slate-600">Taxa conversão: <span className="font-semibold text-slate-800">94% 🏆</span></div>
                  <div className="text-slate-600">Agendamentos: <span className="font-semibold text-slate-800">84</span></div>
                </div>
                <div>
                  <div className="text-slate-600">Compareceram: <span className="font-semibold text-slate-800">81 (96%) 🌟</span></div>
                  <div className="text-slate-600">No-show: <span className="font-semibold text-slate-800">3 (4%) ← MELHOR</span></div>
                  <div className="text-emerald-600 font-bold mt-2">Receita: R$ 178.920</div>
                </div>
              </div>
              <div className="mt-3 bg-white p-3 rounded border border-emerald-300">
                <div className="font-semibold text-emerald-800">💰 ROI do Canal: ∞%</div>
                <div className="text-slate-600 text-sm mt-1">CAC: R$ 0 | LTV: R$ 2.208,89 ← MAIOR LTV! 🏆</div>
                <div className="text-emerald-700 text-sm font-semibold">💡 INSIGHT: Melhor qualidade, maior ticket, menor no-show</div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-gradient-to-r from-indigo-100 to-purple-100 p-4 rounded-lg border-2 border-indigo-300">
            <div className="font-bold text-indigo-900 mb-2">🎯 RECOMENDAÇÕES ESTRATÉGICAS:</div>
            <ol className="text-sm text-slate-700 space-y-1 list-decimal pl-5">
              <li><strong>Google Ads:</strong> MANTER e ESCALAR • Melhor volume, ROI excelente</li>
              <li><strong>Instagram:</strong> OTIMIZAR conversão de 53% → 65% (melhorar CTAs)</li>
              <li><strong>Indicações:</strong> ACELERAR programa • Criar incentivo R$ 200/indicação</li>
            </ol>
          </div>
        </div>

        {/* Relatório 2: Clusterização */}
        <div className="bg-white border-2 border-purple-200 p-5 rounded-lg mb-4">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">🎯</span>
            <div className="flex-1">
              <div className="font-bold text-purple-700 mb-2">RELATÓRIO 2: Clusterização de Leads por Perfil</div>
              <p className="text-sm text-slate-600">IA analisou 663 leads e identificou 5 perfis distintos</p>
            </div>
          </div>

          <div className="space-y-3">
            {/* Cluster 1 */}
            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded">
              <div className="font-bold text-emerald-800 mb-2">CLUSTER 1: &quot;Decidido Urgente&quot; (187 leads - 28%)</div>
              <div className="text-sm space-y-1 text-slate-700">
                <div>• Taxa conversão: <span className="font-bold text-emerald-600">89% ⭐</span></div>
                <div>• No-show: <span className="font-bold text-emerald-600">8%</span></div>
                <div>• LTV: <span className="font-bold text-emerald-600">R$ 4.830</span></div>
                <div className="text-emerald-700 font-semibold mt-2">💰 Valor: R$ 783.810/mês (41% da receita)</div>
              </div>
            </div>

            {/* Cluster 2 */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <div className="font-bold text-blue-800 mb-2">CLUSTER 2: &quot;Pesquisador Cauteloso&quot; (223 leads - 34%)</div>
              <div className="text-sm space-y-1 text-slate-700">
                <div>• Taxa conversão: <span className="font-bold text-blue-600">61%</span></div>
                <div>• No-show: <span className="font-bold text-orange-600">18%</span></div>
                <div>• LTV: <span className="font-bold text-blue-600">R$ 2.130</span></div>
                <div className="text-orange-700 font-semibold mt-2">⚠️ OPORTUNIDADE: Melhorar conversão 61% → 75% = +R$ 44k/mês</div>
              </div>
            </div>

            {/* Cluster 3 */}
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded">
              <div className="font-bold text-teal-800 mb-2">CLUSTER 3: &quot;Indicado Confiante&quot; (89 leads - 13%)</div>
              <div className="text-sm space-y-1 text-slate-700">
                <div>• Taxa conversão: <span className="font-bold text-teal-600">94% 🏆</span></div>
                <div>• No-show: <span className="font-bold text-teal-600">4% 🏆</span></div>
                <div>• LTV: <span className="font-bold text-teal-600">R$ 3.980</span></div>
                <div className="text-teal-700 font-semibold mt-2">🎯 META: DOBRAR indicações (89 → 180/mês) = +R$ 196k/mês</div>
              </div>
            </div>
          </div>
        </div>

        {/* Relatório 3: Jornada do Paciente */}
        <div className="bg-white border-2 border-indigo-200 p-5 rounded-lg">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-3xl">🛤️</span>
            <div className="flex-1">
              <div className="font-bold text-indigo-700 mb-2">RELATÓRIO 3: Jornada Completa do Paciente</div>
              <p className="text-sm text-slate-600">Acompanhamento de 100 pacientes por 12 meses</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <div className="font-semibold text-slate-800">MÊS 1: Primeira Conversão</div>
              <div className="text-slate-700 mt-1">• Agendamentos: 71 (75% dos leads)</div>
              <div className="text-slate-700">• Compareceram: 59 (83%)</div>
              <div className="text-emerald-600 font-bold">Receita: R$ 63.150</div>
            </div>

            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <div className="font-semibold text-slate-800">MÊS 2-3: Conversão Consulta → Procedimento</div>
              <div className="text-slate-700 mt-1">• 18 das 44 consultas viraram cirurgia (<span className="font-bold text-emerald-600">41% conversão!</span>)</div>
              <div className="text-emerald-600 font-bold">Receita adicional: R$ 61.580</div>
            </div>

            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <div className="font-semibold text-slate-800">MÊS 4-6: Follow-up Pós-Procedimento</div>
              <div className="text-slate-700 mt-1">• NPS: 8.9/10 ⭐</div>
              <div className="text-slate-700">• Indicações geradas: 12 novos leads (CAC = R$ 0)</div>
              <div className="text-emerald-600 font-bold">Receita adicional: R$ 11.200</div>
            </div>

            <div className="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded border-2 border-emerald-300">
              <div className="font-bold text-emerald-900">💰 RESULTADO EM 12 MESES:</div>
              <div className="text-slate-800 mt-2">Investimento inicial: <span className="font-semibold">R$ 1.240</span></div>
              <div className="text-emerald-700 text-2xl font-bold mt-1">Receita gerada: R$ 135.930</div>
              <div className="text-emerald-600 font-bold mt-1">ROI: 10.863%</div>
              <div className="text-teal-700 font-semibold mt-2">🎁 BÔNUS: 20 leads novos por indicação (CAC = R$ 0)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Versão alinhada ao documento de arquitetura: métricas-chave, pipeline e crescimento
function RelatoriosModalContentDoc() {
  return (
    <div className="p-4 md:p-6 space-y-6 max-h-[70vh] overflow-auto">
      <div className="bg-white border border-slate-200 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Mês Atual (Outubro)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
            <div className="text-sm text-slate-600">Consultas realizadas</div>
            <div className="text-2xl font-bold text-slate-900">1.750</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
            <div className="text-sm text-slate-600">Ticket médio</div>
            <div className="text-2xl font-bold text-slate-900">R$ 400</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
            <div className="text-sm text-slate-600">Receita total</div>
            <div className="text-2xl font-bold text-slate-900">R$ 700.000</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Pipeline (Em Negociação)</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
            <div className="text-sm text-emerald-700">Cirurgias em análise</div>
            <div className="text-2xl font-bold text-emerald-900">87</div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
            <div className="text-sm text-emerald-700">Valor médio</div>
            <div className="text-2xl font-bold text-emerald-900">R$ 15.000</div>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
            <div className="text-sm text-emerald-700">Valor potencial</div>
            <div className="text-2xl font-bold text-emerald-900">R$ 1.305.000</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 p-6 rounded-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Crescimento</h3>
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
          <div className="text-sm text-amber-700">Crescimento vs mês anterior</div>
          <div className="text-2xl font-bold text-amber-900">+42%</div>
        </div>
      </div>

      <div className="text-xs text-slate-500">Números ilustrativos do documento de arquitetura; ajustar com dados reais quando integrado.</div>
    </div>
  );
}
