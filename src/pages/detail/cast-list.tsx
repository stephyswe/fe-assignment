import { CastItem } from "./cast-item";

export const CastList = () => (
    <div className="w-full">
      <div className="mb-4 text-3xl font-['Helvetica'] font-bold text-white">
        Cast
      </div>
      <div className="grid grid-cols-2 w-full gap-y-8">
        <CastItem />
        <CastItem />
        <CastItem />
        <CastItem />
      </div>
    </div>
  );