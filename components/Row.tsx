

import getCurrentUser from "@/app/actions/getCurrentUser";
import { Media } from "@/typings";
import RowClient from "./RowClient";


interface RowProps {
  title: string;
  data: Media[];
  id: string;
}

const Row: React.FC<RowProps> = async ({ title, data, id }) => {
  const currentUser = await getCurrentUser();
  
  return (
    <RowClient title={title} id={id} data={data} currentUser={currentUser} />
  );
};

export default Row;
