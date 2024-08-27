interface TooltipProps {
  text: string;
  x: number;
  y: number;
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ text, x, y, visible }) => {
  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "5px",
        borderRadius: "4px",
        zIndex: 9999,
        left: `${x}px`,
        top: `${y}px`,
        display: visible ? "block" : "none",
      }}
    >
      {text}
    </div>
  );
};

export default Tooltip;
