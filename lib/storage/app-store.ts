import { create } from "zustand";

type AssetType =
  | "bank"
  | "pf"
  | "insurance"
  | "property";

interface GriefState {
  deceasedName: string;
  relationship: string;
  state: string;
  assets: AssetType[];

  setDeceasedName: (name: string) => void;
  setRelationship: (relationship: string) => void;
  setState: (state: string) => void;
  toggleAsset: (asset: AssetType) => void;
  reset: () => void;
}

export const useAppStore = create<GriefState>((set) => ({
  deceasedName: "",
  relationship: "",
  state: "",
  assets: [],

  setDeceasedName: (name) => set({ deceasedName: name }),

  setRelationship: (relationship) => set({ relationship }),

  setState: (state) => set({ state }),

  toggleAsset: (asset) =>
    set((current) => ({
      assets: current.assets.includes(asset)
        ? current.assets.filter((a) => a !== asset)
        : [...current.assets, asset],
    })),

  reset: () =>
    set({
      deceasedName: "",
      relationship: "",
      state: "",
      assets: [],
    }),
}));