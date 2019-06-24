export function convertToRange(value, originalRangeLength, targetRangeLength) {
  const maxIndex = targetRangeLength - 1;
  const percentile = Math.max(0, Math.min(originalRangeLength, value)) / originalRangeLength;
  return Math.round(maxIndex * percentile);
}
