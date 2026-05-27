import { workflows } from "@/data/workflows/grief-workflows";
import { getDeadlineForAsset } from "./deadline-engine";

export function generateRoadmap(assets: string[]) {
  return assets
    .map((asset) => {
      const workflow = workflows[asset as keyof typeof workflows];
      const deadline = getDeadlineForAsset(asset);

      if (!workflow || !deadline) return null;

      return {
        ...workflow,
        asset,
        deadlineInfo: deadline,
      };
    })
    .filter(Boolean);
}