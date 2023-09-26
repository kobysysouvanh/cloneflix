import prismadb from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";
import { getMedia } from "@/utils/themoviedb";


export async function getAllFavorites() {
    const currentUser = await getCurrentUser();
    const list: any = []

    const favorites = currentUser!.favorites

    for (const mediaId of favorites) {
        list.push(await getMedia(mediaId))
    }

    return list

}