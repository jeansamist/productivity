import { User } from "@/types/User";
import { create } from "zustand";

interface UserStoreType {
  user: User | null | undefined;
  setUser: (user: User | null) => void;
}
export const useUserStore = create<UserStoreType>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));
