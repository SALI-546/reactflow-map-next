import { MarkerType, ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { CustomNode } from "./CustomNode";

const nodeStyle = {
  backgroundColor: "rgb(104, 139, 133, 0.39)",
  color: "#000000",
  fontWeight: "500",
  fontSize: "16px",
  width: "226px",
  height: "45px",
  padding: "0",
  border: "none",
  borderRadius: "11px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const initialNodes = [
  {
    id: "1",
    position: { x: 363, y: 0 },
    data: { label: "Nextmux Pay" },
    style: {
      ...nodeStyle,
      backgroundColor: "#678983",
      color: "#fff",
      width: "300px",
      fontSize: "20px",
    },
  },
  // Bare 2
  {
    id: "21",
    position: { x: 400, y: 100 },
    data: { label: "Barre de navigation" },
    type: "custom",
    style: nodeStyle,
  },
  {
    id: "22",
    position: { x: 750, y: 100 },
    data: { label: "Se Connecter" },
    sourcePosition: "right",
    targetPosition: "left",
    style: nodeStyle,
  },
  {
    id: "23",
    position: { x: 1050, y: 100 },
    data: {
      label: "S'inscrire",
    },
    sourcePosition: "right",
    targetPosition: "left",
    style: nodeStyle,
  },

  // bare 3
  {
    id: "31",
    position: { x: 130, y: 200 },
    data: { label: "Accueil" },
    style: nodeStyle,
  },
  {
    id: "32",
    position: { x: 430, y: 200 },
    data: { label: "Services" },
    style: nodeStyle,
  },
  {
    id: "33",
    position: { x: 800, y: 200 },
    data: { label: "Contact" },
    style: nodeStyle,
  },
  {
    id: "34",
    position: { x: 1100, y: 200 },
    data: { label: "Support" },
    style: nodeStyle,
  },

  // // Bare 4
  {
    id: "41",
    position: { x: 130, y: 300 },
    data: { label: "Effectuer une transaction" },
    style: nodeStyle,
  },
  {
    id: "42",
    position: { x: 430, y: 300 },
    data: { label: "Paiement en ligne" },
    style: nodeStyle,
  },
  {
    id: "43",
    position: { x: 1100, y: 300 },
    data: { label: "Documentation" },
    style: nodeStyle,
  },

  // // Bare 5
  {
    id: "51",
    position: { x: 430, y: 400 },
    data: { label: "Gestion des transactions" },
    style: nodeStyle,
  },

  // // Bare 6
  {
    id: "61",
    position: { x: 430, y: 500 },
    data: { label: "Intégrations E-commerce" },
    style: nodeStyle,
  },

  // // Bare 7
  {
    id: "71",
    position: { x: 0, y: 700 },
    data: { label: "Pied de page" },
    sourcePosition: "right",
    targetPosition: "top",
    type: "custom",
    style: nodeStyle,
  },

  // Bare 8
  {
    id: "81",
    position: { x: 300, y: 800 },
    data: { label: "Liens Rapides" },
    style: nodeStyle,
  },
  {
    id: "82",
    position: { x: 600, y: 800 },
    data: { label: "Business" },
    style: nodeStyle,
  },
  {
    id: "83",
    position: { x: 900, y: 800 },
    data: { label: "RGPu" },
    style: nodeStyle,
  },

  // Bare 9
  {
    id: "91",
    position: { x: 300, y: 900 },
    data: { label: "FAQ" },
    style: nodeStyle,
  },
  {
    id: "92",
    position: { x: 600, y: 900 },
    data: { label: "Examen" },
    style: nodeStyle,
  },
  {
    id: "93",
    position: { x: 900, y: 900 },
    data: { label: "CGU" },
    style: nodeStyle,
  },

  // Bare 10
  {
    id: "101",
    position: { x: 300, y: 1000 },
    data: { label: "A-Propos" },
    style: nodeStyle,
  },
  {
    id: "102",
    position: { x: 600, y: 1000 },
    data: { label: "Masterclass" },
    style: nodeStyle,
  },
  {
    id: "103",
    position: { x: 900, y: 1000 },
    data: { label: "Confidentialité" },
    style: nodeStyle,
  },

  // Bare 11
  {
    id: "111",
    position: { x: 300, y: 1100 },
    data: { label: "Tableau de bord" },
    style: nodeStyle,
  },
  {
    id: "112",
    position: { x: 600, y: 1100 },
    data: { label: "Coaching" },
    style: nodeStyle,
  },
  {
    id: "113",
    position: { x: 900, y: 1100 },
    data: { label: "Paiement" },
    style: nodeStyle,
  },
];

const initialEdges = [
  {
    id: "e1-21",
    source: "1",
    target: "21",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },

  // barre 2
  {
    id: "e21-22",
    source: "21",
    target: "22",
    type: "step",
    sourceHandle: "right",
  },
  {
    id: "e22-23",
    source: "22",
    target: "23",
    type: "step",
  },

  // bare 3
  {
    id: "e21-31",
    source: "21",
    target: "31",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e21-32",
    source: "21",
    target: "32",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e21-33",
    source: "21",
    target: "33",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e21-34",
    source: "21",
    target: "34",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e21-35",
    source: "21",
    target: "35",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },

  // bare 4
  {
    id: "e31-41",
    source: "31",
    target: "41",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e32-42",
    source: "32",
    target: "42",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e34-44",
    source: "34",
    target: "43",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },

  // bare 5 & 6
  {
    id: "e42-51",
    source: "42",
    target: "51",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e51-61",
    source: "51",
    target: "61",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },

  // Bare 7
  {
    id: "e11-71",
    source: "21",
    target: "71",
    type: "step",
    sourceHandle: "left",
    markerEnd: { type: MarkerType.ArrowClosed },
  },

  // Bare 8
  {
    id: "e71-81",
    source: "71",
    target: "81",
    type: "step",
    sourceHandle: "right",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e71-82",
    source: "71",
    target: "82",
    type: "step",
    sourceHandle: "right",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e71-83",
    source: "71",
    target: "83",
    type: "step",
    sourceHandle: "right",
    markerEnd: { type: MarkerType.ArrowClosed },
  },

  // Bare 9
  {
    id: "e81-91",
    source: "81",
    target: "91",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e82-92",
    source: "82",
    target: "92",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e83-93",
    source: "83",
    target: "93",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },

  // Bare 10
  {
    id: "e91-101",
    source: "91",
    target: "101",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e92-102",
    source: "92",
    target: "102",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e93-103",
    source: "93",
    target: "103",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },

  // Bare 11
  {
    id: "e101-111",
    source: "101",
    target: "111",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e102-112",
    source: "102",
    target: "112",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: "e103-113",
    source: "103",
    target: "113",
    type: "step",
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

const nodeTypes = { custom: CustomNode };

export const FlowMap = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        padding: "25px",
      }}
    >
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        elementsSelectable={false}
        panOnScroll={true}
      />
    </div>
  );
};
