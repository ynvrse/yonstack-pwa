import { FullSizeCentered } from '@/components/styled';

function Loading() {
  return (
    <FullSizeCentered>
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-transparent" />
    </FullSizeCentered>
  );
}

export default Loading;
