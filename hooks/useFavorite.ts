import { SafeUser } from "@/typings";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface IUseFavorite {
  mediaId: number;
  currentUser?: SafeUser | null;
}

const useFavorite = ({ mediaId, currentUser }: IUseFavorite) => {
  const router = useRouter();

  const hasFavorited = useMemo(() => {
    const list = currentUser?.favorites || [];

    return list.includes(mediaId);
  }, [currentUser, mediaId]);

  const toggleFavorite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      try {
        let request;

        if (hasFavorited) {
          request = () => axios.delete("/api/favorites", { data: { mediaId } });
          await request();
          toast.success("Removed from Watch List!");
          return router.refresh()
        } else {
          request = () => axios.post("/api/favorites", { mediaId });
        }

        await request();
        router.refresh()
        toast.success("Added to Watch List!");
      } catch (err) {
        return toast.error("Something went wrong.");
      }
    },
    [currentUser, hasFavorited, mediaId]
  );

  return {
    hasFavorited,
    toggleFavorite,
  };
};

export default useFavorite;
