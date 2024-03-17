import { deleteBoard } from "@/actions/delete-board";
import { FormDelete } from "./form-delete";

interface BoardProps {
  title: string;
  id: string;
}
const Board = ({ id, title }: BoardProps) => {
  const delteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={delteBoardWithId} className="flex items-center gap-x-2">
      <p>Board title: {title}</p>
      <FormDelete />
    </form>
  );
};

export default Board;
