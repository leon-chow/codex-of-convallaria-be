// TODO: Fix if item categories become too complex, or if function is re-used
export const singularizeWord = (word: string) => {
  return word.toLowerCase().slice(0, word.length - 1);
} 

export const desluggifyText = (text: string) => {
  return text.replace("-", " ");
}