import getCurrentUser from "@/actions/getCurrentUser";
import { Media } from "@/typings";
import RowClient from "./RowClient";

interface RowProps {
  title: string;
  data: Media[];
  id: string;
  type: string
}

const Row: React.FC<RowProps> = async ({ title, data, id, type }) => {
  const currentUser = await getCurrentUser();

  return (
    <RowClient title={title} id={id} data={data} type={type} currentUser={currentUser} />
  );
};

export default Row;
