interface TextDisplayProps {
  text: string;
  color: string;
}

export default function TextDisplay({ text, color }: TextDisplayProps) {
  return <p style={{ color: color }}>{text}</p>;
}
