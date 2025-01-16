import * as fs from 'fs';
const oldReferencesSortedInNewWay = [316, 289, 134, 261];
const referenceMap = createReferenceMap(oldReferencesSortedInNewWay);
// const referenceMap = { 289: 2, 134: 3, 261: 4, 316: 1 };
const filePath = 'src/diss.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  console.log('File contents:', data);
  const updatedText = replaceReferencesInText(data, referenceMap);

  writeToFile('src/result.txt', updatedText);
});

function replaceReferencesInText(
  text: string,
  referenceMap: { [key: number]: number },
): string {
  // Шукаємо всі числа в квадратних дужках
  const regex = /\[(.*?)\]/g;
  return text.replace(regex, (match) => {
    // Отримуємо всі числа з квадратних дужок
    const numbers = match
      .slice(1, -1)
      .split(',')
      .map((num) => num.trim());

    // Замінюємо числа на нові значення за допомогою мапи
    const updatedNumbers = numbers.map((num: string) => {
      const number = parseInt(num, 10);
      if (referenceMap[number] !== undefined) {
        return referenceMap[number]; // Заміна на нове значення з мапи
      }
      return num; // Якщо немає в мапі, залишаємо без змін
    });

    // Повертаємо оновлені числа в квадратних дужках
    return `[${updatedNumbers.join(', ')}]`;
  });
}

function createReferenceMap(oldReferences: number[]): {
  [key: number]: number;
} {
  const referenceMap: { [key: number]: number } = {};

  oldReferences.forEach((oldReference, index) => {
    referenceMap[oldReference] = index + 1; // Set the new position as index + 1 (starting from 1)
  });

  return referenceMap;
}

function writeToFile(fileName: string, data: string): void {
  fs.writeFile(fileName, data, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Data successfully written to ${fileName}`);
    }
  });
}
