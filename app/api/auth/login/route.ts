import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { signToken, setTokenCookie } from "@/lib/auth";
import { apiError, apiSuccess } from "@/lib/api-utils";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) return apiError("Email and password required");

    const user = await prisma.adminUser.findUnique({ where: { email } });
    if (!user) return apiError("Invalid credentials", 401);

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return apiError("Invalid credentials", 401);

    const token = await signToken({ id: user.id, email: user.email, role: user.role });

    const response = apiSuccess({ user: { id: user.id, email: user.email, name: user.name, role: user.role } });
    response.headers.set("Set-Cookie", setTokenCookie(token));
    return response;
  } catch (err) {
    return apiError("Login failed", 500);
  }
}
