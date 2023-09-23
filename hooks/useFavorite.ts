import { SafeUser } from "@/typings";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface IUseFavorite {
  itemId: number;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ itemId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favorites || [];

    return list.includes(itemId);
  }, [currentUser, itemId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete("/api/favorites", { data: { itemId } });
          await request();
          toast.success("Removed from Watch List!");
          return router.refresh()
        } else {
          request = () => axios.post("/api/favorites", { itemId });
        }

        await request();
        router.refresh()
        toast.success("Added to Watch List!");
      } catch (err) {
        return toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, itemId]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
