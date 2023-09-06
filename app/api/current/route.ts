import { NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";

export async function GET(req: Request) {
  try {
    const { currentUser } = await serverAuth(req);

    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 400 }
    );
  }
}
