import { ShadcnTable } from "@/components/ShadcnTable";
import { TanStackTable } from "@/components/TanStackTable";

export default function Home() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">TanStack Table</h1>
        <TanStackTable />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Shadcn/ui Table</h1>
        <ShadcnTable />
      </div>
    </div>
  );
}
