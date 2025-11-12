import { CheckCircle } from 'lucide-react';

const StaffPickBadge = () => {
  return (
    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-sm">
      <CheckCircle className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
      <span className="text-xs font-normal text-gray-700">Staff Pick</span>
    </div>
  );
};

export default StaffPickBadge;
