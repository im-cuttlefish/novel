import { mock } from "./mock";

export const getScenario = async (_url: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return mock;
};
