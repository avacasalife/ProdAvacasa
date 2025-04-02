interface PrimaryButtonProps {
  text: string;
  onClick?: () => void;
  className?: string; // ✅ Allow className as an optional prop
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
