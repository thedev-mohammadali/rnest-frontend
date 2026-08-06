import { Button } from "@/components/ui/button";

const Pagination = () => {
  return (
    <div className="mt-10 flex justify-center gap-2">
      <Button variant="outline">Previous</Button>

      <Button>1</Button>

      <Button variant="outline">2</Button>

      <Button variant="outline">3</Button>

      <Button variant="outline">Next</Button>
    </div>
  );
};

export default Pagination;
