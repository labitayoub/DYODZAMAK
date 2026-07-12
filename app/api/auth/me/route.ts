import { NextRequest } from "next/server";
import { getSession } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session) return apiError("Not authenticated", 401);
  return apiSuccess({ user: session });
}
