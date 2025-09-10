export const graphCore = (params?: { name?: string }) => {
  return `graphCore ${params?.name ?? ''}`;
};
