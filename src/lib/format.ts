export function formatSeconds(value: number): string {
  return value.toFixed(2);
}

export function formatTPS(value: number): string {
  return value.toFixed(1);
}

export function formatCount(value: bigint): string {
  return value.toLocaleString();
}

export function formatStake(microAlgos: bigint): string {
  const algos = Number(microAlgos / 1_000_000n);
  if (algos >= 1_000_000_000) {
    return (algos / 1_000_000_000).toFixed(2) + "B";
  }
  if (algos >= 1_000_000) {
    return (algos / 1_000_000).toFixed(2) + "M";
  }
  return algos.toLocaleString();
}
