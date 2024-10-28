import { Handle, Position } from "@xyflow/react";

export const CustomNode = ({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <span >
        {data.label}
      </span>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={{right: 0}}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="left"
        style={{left: 0}}
      />
    </>
  );
};
