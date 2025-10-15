"use client";

import { useCallback, useEffect, useMemo } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
  type Connection,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

export type FlowKind = "agendamento" | "triagem-noshow" | "faq";

function nodesAndEdges(kind: FlowKind): { nodes: Node[]; edges: Edge[] } {
  switch (kind) {
    case "agendamento": {
      const common = { sourcePosition: Position.Right, targetPosition: Position.Left } as const;
      const nodes: Node[] = [
        { id: "lead", position: { x: 0, y: 120 }, data: { label: "Lead chega via WhatsApp / LP" }, type: "input", className: "flow-node", ...common },
        { id: "ia", position: { x: 260, y: 120 }, data: { label: "SDR IA – Primeiro contato" }, className: "flow-node flow-node--primary", ...common },
        { id: "opcao", position: { x: 520, y: 120 }, data: { label: "Consulta ou tirar dúvidas?" }, className: "flow-node flow-node--decision", ...common },
        { id: "duvidas", position: { x: 780, y: 40 }, data: { label: "Aciona subfluxo: FAQ Inteligente" }, type: "output", className: "flow-node flow-node--output", ...common },
        { id: "consulta", position: { x: 780, y: 200 }, data: { label: "Consulta / Procedimento" }, className: "flow-node", ...common },
        { id: "plano", position: { x: 1040, y: 80 }, data: { label: "Plano de Saúde" }, className: "flow-node", ...common },
        { id: "particular", position: { x: 1040, y: 220 }, data: { label: "Particular" }, className: "flow-node", ...common },
        { id: "qualif", position: { x: 1300, y: 150 }, data: { label: "Qualificação" }, className: "flow-node", ...common },
        { id: "disp", position: { x: 1560, y: 150 }, data: { label: "Agenda Unificada (Tasy + Particular)" }, className: "flow-node", ...common },
        { id: "agend", position: { x: 1820, y: 150 }, data: { label: "Agendamento + Registro no CRM" }, type: "output", className: "flow-node flow-node--output", ...common },
        { id: "hitl", position: { x: 1820, y: 60 }, data: { label: "Aciona humano para confirmar" }, type: "output", className: "flow-node flow-node--output", ...common },
      ];
      const edges: Edge[] = [
        { id: "a1", source: "lead", target: "ia", animated: true },
        { id: "a2", source: "ia", target: "opcao", animated: true },
        { id: "a3", source: "opcao", target: "duvidas", animated: true },
        { id: "a4", source: "opcao", target: "consulta", animated: true },
        { id: "a5", source: "consulta", target: "plano", animated: true },
        { id: "a6", source: "consulta", target: "particular", animated: true },
        { id: "a7", source: "plano", target: "qualif", animated: true },
        { id: "a8", source: "particular", target: "qualif", animated: true },
        { id: "a9", source: "qualif", target: "disp", animated: true },
        { id: "a10", source: "disp", target: "agend", animated: true },
        { id: "a11", source: "agend", target: "hitl", animated: true },
      ];
      return { nodes, edges };
    }
    case "triagem-noshow": {
      const common = { sourcePosition: Position.Right, targetPosition: Position.Left } as const;
      const nodes: Node[] = [
        { id: "agenda", position: { x: 0, y: 120 }, data: { label: "Agenda (próximas consultas)" }, type: "input", className: "flow-node", ...common },
        { id: "d1", position: { x: 260, y: 70 }, data: { label: "Lembrete D‑1" }, className: "flow-node", ...common },
        { id: "d2h", position: { x: 260, y: 170 }, data: { label: "Lembrete D‑2h" }, className: "flow-node", ...common },
        { id: "confirma", position: { x: 520, y: 120 }, data: { label: "Confirma presença?" }, className: "flow-node flow-node--decision", ...common },
        { id: "ok", position: { x: 780, y: 60 }, data: { label: "Confirmado" }, type: "output", className: "flow-node flow-node--output", ...common },
        { id: "reagendar", position: { x: 780, y: 140 }, data: { label: "Reagendar" }, type: "output", className: "flow-node flow-node--output", ...common },
        { id: "cancel", position: { x: 520, y: 260 }, data: { label: "Cancelamento detectado" }, className: "flow-node", ...common },
        { id: "fila", position: { x: 780, y: 260 }, data: { label: "Fila de espera notificada" }, type: "output", className: "flow-node flow-node--output", ...common },
      ];
      const edges: Edge[] = [
        { id: "n1", source: "agenda", target: "d1", animated: true },
        { id: "n2", source: "agenda", target: "d2h", animated: true },
        { id: "n3", source: "d1", target: "confirma", animated: true },
        { id: "n4", source: "d2h", target: "confirma", animated: true },
        { id: "n5", source: "confirma", target: "ok", animated: true },
        { id: "n6", source: "confirma", target: "reagendar", animated: true },
        { id: "n7", source: "confirma", target: "cancel", animated: true },
        { id: "n8", source: "cancel", target: "fila", animated: true },
      ];
      return { nodes, edges };
    }
    case "faq": {
      const common = { sourcePosition: Position.Right, targetPosition: Position.Left } as const;
      const nodes: Node[] = [
        { id: "pac", position: { x: 0, y: 100 }, data: { label: "Paciente" }, type: "input", className: "flow-node", ...common },
        { id: "canal", position: { x: 200, y: 100 }, data: { label: "WhatsApp" }, className: "flow-node", ...common },
        { id: "faq", position: { x: 420, y: 100 }, data: { label: "IA – FAQ Inteligente" }, className: "flow-node flow-node--primary", ...common },
        { id: "proced", position: { x: 660, y: 20 }, data: { label: "Procedimentos" }, className: "flow-node", ...common },
        { id: "recuperacao", position: { x: 660, y: 80 }, data: { label: "Recuperação" }, className: "flow-node", ...common },
        { id: "valores", position: { x: 660, y: 140 }, data: { label: "Valores / Convênios" }, className: "flow-node", ...common },
        { id: "sobre", position: { x: 660, y: 200 }, data: { label: "Sobre o Médico" }, className: "flow-node", ...common },
        { id: "local", position: { x: 660, y: 260 }, data: { label: "Localização e Horários" }, className: "flow-node", ...common },
        { id: "escalonamento", position: { x: 900, y: 100 }, data: { label: "Escala p/ humano se necessário" }, type: "output", className: "flow-node flow-node--output", ...common },
      ];
      const edges: Edge[] = [
        { id: "f1", source: "pac", target: "canal", animated: true },
        { id: "f2", source: "canal", target: "faq", animated: true },
        { id: "f3", source: "faq", target: "proced", animated: true },
        { id: "f4", source: "faq", target: "recuperacao", animated: true },
        { id: "f5", source: "faq", target: "valores", animated: true },
        { id: "f7", source: "faq", target: "sobre", animated: true },
        { id: "f8", source: "faq", target: "local", animated: true },
        { id: "f6", source: "faq", target: "escalonamento", animated: true },
      ];
      return { nodes, edges };
    }
  }
}

export default function FlowDiagram({ kind }: { kind: FlowKind }) {
  const { nodes: initialNodes, edges: initialEdges } = useMemo(() => nodesAndEdges(kind), [kind]);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
    [setEdges]
  );

  return (
    <div className="w-full h-full relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 0.2 }}
      >
        <MiniMap pannable zoomable />
        <Controls />
        <Background />
      </ReactFlow>
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg border border-slate-200 shadow-sm px-3 py-2 text-xs text-slate-700">
        <div className="font-semibold text-prime mb-1">Como interagir</div>
        <div>- Arraste nós para reorganizar</div>
        <div>- Scroll para zoom • Arraste fundo para pan</div>
        <div>- Conecte nós arrastando entre as extremidades</div>
      </div>
    </div>
  );
}
