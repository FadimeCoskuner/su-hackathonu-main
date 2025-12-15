import { create } from "zustand";
import * as type from "./tempModal";

export const useTempStore = create<type.tempStoreType>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
