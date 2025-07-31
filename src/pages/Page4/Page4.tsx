import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

function Page4() {
  return (
    <>
      <meta name="title" content="Page 4" />
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Page 4</h1>
        <Button asChild variant="outline" className="mt-4">
          <Link to={`/${Math.random().toString()}`}>
            Want to check 404?
          </Link>
        </Button>
      </div>
    </>
  );
}

export default Page4;