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
        { id: "lead", position: { x: 0, y: 120 }, data: { label: "LEAD CHEGA VIA OMNICHANNEL" }, type: "input", ...common },
        { id: "ia", position: { x: 260, y: 120 }, data: { label: "AGENTE IA – Filtragem do lead" }, style: { background: "#eaf4ff", borderColor: "#2563eb" }, ...common },
        { id: "esp", position: { x: 520, y: 120 }, data: { label: "Especialidades" }, ...common },
        { id: "plano", position: { x: 760, y: 40 }, data: { label: "Plano de Saúde" }, ...common },
        { id: "particular", position: { x: 760, y: 200 }, data: { label: "Particular" }, ...common },
        { id: "qualif", position: { x: 1000, y: 120 }, data: { label: "Qualificação" }, ...common },
        { id: "disp", position: { x: 1240, y: 120 }, data: { label: "Agenda Unificada (Tasy + Particular)" }, ...common },
        { id: "agend", position: { x: 1480, y: 120 }, data: { label: "Agendamento / Escala humano" }, type: "output", ...common },
      ];
      const edges: Edge[] = [
        { id: "a1", source: "lead", target: "ia", animated: true },
        { id: "a2", source: "ia", target: "esp", animated: true },
        { id: "a3", source: "esp", target: "plano", animated: true },
        { id: "a4", source: "esp", target: "particular", animated: true },
        { id: "a5", source: "plano", target: "qualif", animated: true },
        { id: "a6", source: "particular", target: "qualif", animated: true },
        { id: "a7", source: "qualif", target: "disp", animated: true },
        { id: "a8", source: "disp", target: "agend", animated: true },
      ];
      return { nodes, edges };
    }
    case "triagem-noshow": {
      const common = { sourcePosition: Position.Right, targetPosition: Position.Left } as const;
      const nodes: Node[] = [
        { id: "ia", position: { x: 0, y: 140 }, data: { label: "AGENTE IA" }, type: "input", ...common },
        { id: "canal", position: { x: 220, y: 140 }, data: { label: "WhatsApp – fala com o paciente" }, ...common },
        { id: "follow", position: { x: 460, y: 40 }, data: { label: "Follow-up de confirmação" }, ...common },
        { id: "triagem", position: { x: 460, y: 240 }, data: { label: "Triagem paciente" }, ...common },
        { id: "24h", position: { x: 720, y: 0 }, data: { label: "24h após confirmação" }, ...common },
        { id: "72h", position: { x: 720, y: 80 }, data: { label: "72h antes do agendamento" }, ...common },
        { id: "confirma", position: { x: 980, y: 40 }, data: { label: "Confirma presença" }, ...common },
        { id: "confirmado", position: { x: 1240, y: 0 }, data: { label: "Confirmado" }, type: "output", ...common },
        { id: "reagendar", position: { x: 1240, y: 80 }, data: { label: "Reagendar paciente" }, type: "output", ...common },
        { id: "coleta", position: { x: 720, y: 240 }, data: { label: "Coleta de dados" }, ...common },
        { id: "checklist", position: { x: 980, y: 240 }, data: { label: "Checklist de preparo" }, ...common },
        { id: "orient", position: { x: 1240, y: 240 }, data: { label: "Orientações pré-operatórias" }, type: "output", ...common },
      ];
      const edges: Edge[] = [
        { id: "t1", source: "ia", target: "canal", animated: true },
        { id: "t2", source: "canal", target: "follow", animated: true },
        { id: "t3", source: "canal", target: "triagem", animated: true },
        { id: "t4", source: "follow", target: "24h", animated: true },
        { id: "t5", source: "follow", target: "72h", animated: true },
        { id: "t6", source: "24h", target: "confirma", animated: true },
        { id: "t7", source: "72h", target: "confirma", animated: true },
        { id: "t8", source: "confirma", target: "confirmado", animated: true },
        { id: "t9", source: "confirma", target: "reagendar", animated: true },
        { id: "t10", source: "triagem", target: "coleta", animated: true },
        { id: "t11", source: "coleta", target: "checklist", animated: true },
        { id: "t12", source: "checklist", target: "orient", animated: true },
      ];
      return { nodes, edges };
    }
    case "faq": {
      const common = { sourcePosition: Position.Right, targetPosition: Position.Left } as const;
      const nodes: Node[] = [
        { id: "pac", position: { x: 0, y: 80 }, data: { label: "Paciente" }, type: "input", ...common },
        { id: "canal", position: { x: 200, y: 80 }, data: { label: "WhatsApp" }, ...common },
        { id: "faq", position: { x: 420, y: 80 }, data: { label: "IA – FAQ Inteligente" }, style: { background: "#eaf4ff", borderColor: "#2563eb" }, ...common },
        { id: "convenios", position: { x: 660, y: 0 }, data: { label: "Convênios" }, ...common },
        { id: "preparo", position: { x: 660, y: 80 }, data: { label: "Preparo Exames" }, ...common },
        { id: "valores", position: { x: 660, y: 160 }, data: { label: "Valores / Particulares" }, ...common },
        { id: "escalonamento", position: { x: 900, y: 80 }, data: { label: "Escala p/ humano se necessário" }, type: "output", ...common },
      ];
      const edges: Edge[] = [
        { id: "f1", source: "pac", target: "canal", animated: true },
        { id: "f2", source: "canal", target: "faq", animated: true },
        { id: "f3", source: "faq", target: "convenios", animated: true },
        { id: "f4", source: "faq", target: "preparo", animated: true },
        { id: "f5", source: "faq", target: "valores", animated: true },
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
