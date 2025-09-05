import { Button } from "@/components/ui/button";
import Link from "next/link";

const ChaiPage = () => {
  return (
    <main className="flex h-full  flex-col  justify-center text-dark  p-5 row-start-2 items-center">
      <h1 class="text-3xl font-bold underline">Chai Page!</h1>
      <Link
        href="/"
        className="px-6  transition-all transition-3  py-2 bg-blue-500 rounded my-3 hover:bg-blue-100 hover:text-blue-500"
      >
        Home
      </Link>
      <Button variant="Chai">Shadcn button </Button>
    </main>
  );
};

export default ChaiPage;
