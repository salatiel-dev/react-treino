type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return (
    <button onClick={() => alert(`A label desse botão é ${label}`)}>
      {label}
    </button>
  );
}
