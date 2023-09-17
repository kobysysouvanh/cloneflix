import RowItem from "./RowItem";

interface RowProps {
  title: string;
  data: [];
}

const Row: React.FC<RowProps> = ({ title, data }) => {
  return (
    <div className="px-6 my-6 flex flex-col transition-all">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
        {title}
      </h2>
      <div className="flex group items-center gap-3 py-2 overflow-x-scroll scrollbar-hide scroll-smooth">
        {data.map((item) => (
          <RowItem key={item} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Row;
