import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

interface BoardProps {
  title: string;
  id: string;
}
const Board = ({ id, title }: BoardProps) => {
  const delteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={delteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <Button type="submit" variant="destructive" size="sm">
        <Trash className="size-4" />
      </Button>
    </form>
  );
};

export default Board;
