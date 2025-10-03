import { create } from "zustand";

type PageStoreState = {
  page: number;
};

type PageStoreActions = {
  setPage: (page: number) => void;
};

type PageStore = PageStoreState & PageStoreActions;

export const usePageStore = create<PageStore>((set) => ({
  page: 1,
  setPage: (page: number) => set({ page }),
  clearStore: () => set({ page: 1 }),
}));
