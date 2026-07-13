import { NextRequest } from "next/server";
import { getSession, clearTokenCookie } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Not authenticated", 401);

  const response = apiSuccess({ message: "Logged out" });
  response.headers.set("Set-Cookie", clearTokenCookie());
  return response;
}
