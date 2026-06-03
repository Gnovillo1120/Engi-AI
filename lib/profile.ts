import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getOrCreateProfile() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const email = user.emailAddresses[0]?.emailAddress;

  if (!email) {
    return null;
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

  return profile;
}