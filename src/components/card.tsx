import Image from "next/image";

interface LoanCardProps {
  imageUrl: string;
  name: string;
  loanAmount: string;
  interestRate: string;
  duration: string;
  description: string;
}

const LoanCard: React.FC<LoanCardProps> = ({
  imageUrl,
  name,
  loanAmount,
  interestRate,
  duration,
  description,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white rounded-xl p-6 shadow-lg w-full max-w-sm">
      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          className="rounded-full border-2 border-white"
        />
      </div>

      {/* Loan Details */}
      <h2 className="text-2xl font-bold text-center mt-4">{name}</h2>
      <p className="text-center text-gray-300">{description}</p>

      {/* Loan Info */}
      <div className="mt-4 space-y-2">
        <p className="text-lg">
          <strong>Loan Amount:</strong> {loanAmount}
        </p>
        <p className="text-lg">
          <strong>Interest Rate:</strong> {interestRate}
        </p>
        <p className="text-lg">
          <strong>Duration:</strong> {duration}
        </p>
      </div>

      {/* Apply Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default LoanCard;
