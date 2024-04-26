// TODO: Fix if item categories become too complex, or if function is re-used
export const singularizeWord = (word: string) => {
  return word.toLowerCase().slice(0, word.length - 1);
} 

export const desluggifyText = (text: string) => {
  return text.replace("-", " ");
}

export const compareDates = (dateA: string, dateB: string) => {
  const partsA = dateA.split('/');
  const partsB = dateB.split('/');

  const dateObjA = new Date(`${partsA[2]}-${partsA[0]}-${partsA[1]}`);
  const dateObjB = new Date(`${partsB[2]}-${partsB[0]}-${partsB[1]}`);

  if (dateObjA < dateObjB) {
    return 'before';
  } else if (dateObjA > dateObjB) {
    return 'after';
  } else {
    return 'equal';
  }
}
