"use server";
import { blockUser, unblockUser } from "@/lib/block-service";
import { revalidatePath } from "next/cache";

export const onBlock = async (id: string) => {
  // TODO: adapt to disconnect from livestream
  // TODO: allow ability to kick the guest

  const blockedUser = await blockUser(id);

  //   refresh page and cache
  revalidatePath("/");

  if (blockedUser) {
    revalidatePath(`/${blockedUser.blocked.username}`);
  }

  return blockedUser;
};

export const onUnblock = async (id: string) => {
  const unblockedUser = await unblockUser(id);

  //   refresh page and cache
  revalidatePath("/");

  if (unblockedUser) {
    revalidatePath(`/${unblockedUser.blocked.username}`);
  }

  return unblockedUser;
};
