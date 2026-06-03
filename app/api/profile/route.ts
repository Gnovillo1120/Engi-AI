import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = user.emailAddresses[0]?.emailAddress;

  if (!email) {
    return NextResponse.json({ error: "User email not found" }, { status: 400 });
  }

  const profile = await prisma.profile.upsert({
    where: {
      clerkUserId: user.id,
    },
    update: {
      email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    create: {
      clerkUserId: user.id,
      email,
      firstName: user.firstName,
      lastName: user.lastName,
    },
  });

  return NextResponse.json({ profile });
}

export async function PATCH(request: Request) {
  const user = await currentUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const targetRole = body.targetRole;

  if (!targetRole || typeof targetRole !== "string") {
    return NextResponse.json(
      { error: "Target role is required" },
      { status: 400 }
    );
  }

  const profile = await prisma.profile.update({
    where: {
      clerkUserId: user.id,
    },
    data: {
      targetRole,
    },
  });

  return NextResponse.json({ profile });
}