import { NextResponse } from "next/server";
import getCurrentUser from "../../../actions/getCurrentUser";
import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();
    const { mediaId } = body;

    if (!currentUser) return NextResponse.error();
    if (!mediaId) throw new Error("Invalid id");

    const user = await prismadb.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        favorites: {
          push: mediaId,
        },
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[FAVORITES_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const currentUser = await getCurrentUser();
  const body = await req.json();
  const { mediaId } = body;

  if (!currentUser) return NextResponse.error();
  if (!mediaId) throw new Error("Invalid ID");

  let favorites = [...(currentUser.favorites || [])];

  favorites = favorites.filter((id) => id !== mediaId);

  const user = await prismadb.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favorites,
    },
  });

  return NextResponse.json(user);
}
