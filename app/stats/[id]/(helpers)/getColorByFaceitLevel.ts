export const getColorByFaceitLevel = (level: number) => {
  if (level === 10) return 'text-red-500';
  if (level >= 8) return 'text-orange-500';
  if (level >= 4) return 'text-yellow-500';
  if (level === 3) return 'text-green-500';
  return 'text-white';
};
