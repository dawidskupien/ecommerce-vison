export function splitText(text: string) {
  const middleIndex = Math.floor(text.length / 2);

  const findNearestSpace = (index: number, direction: number) => {
    while (index >= 0 && index < text.length) {
      if (text[index] === " ") return index;
      index += direction;
    }
    return index;
  };

  const beforeSplit = findNearestSpace(middleIndex, -1);
  const afterSplit = findNearestSpace(middleIndex, 1);
  const splitIndex =
    Math.abs(middleIndex - beforeSplit) <= Math.abs(afterSplit - middleIndex)
      ? beforeSplit
      : afterSplit;

  return [text.slice(0, splitIndex).trim(), text.slice(splitIndex).trim()];
}
