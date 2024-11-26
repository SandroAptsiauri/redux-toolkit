export const fetchCount = async (amount: number): Promise<{ data: number }> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: amount }), 1000)
  );
};
