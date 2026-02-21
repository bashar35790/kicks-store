import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorState = ({ message = "Something went wrong", onRetry }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full px-4 text-center">
      <div className="bg-red-50 text-red-500 p-4 rounded-full mb-6">
        <AlertCircle className="w-10 h-10" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Oops! Error</h3>
      <p className="text-gray-500 mb-8 max-w-md">{message}</p>

      {onRetry && (
        <Button onClick={onRetry} variant="outline" className="px-8">
          Try Again
        </Button>
      )}
    </div>
  );
};
