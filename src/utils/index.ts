//data from server
export const todayDate = new Date().toISOString().split('T')[0];
const generateTimeOptions = () => {
  const options: Array<string> = [];
  let date = new Date();
  date.setHours(19, 0, 0, 0);

  const endTime = new Date(date).setHours(23, 0, 0, 0);

  while (date.getTime() <= endTime) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    options.push(timeString);
    date.setMinutes(date.getMinutes() + 15);
  }
  return options;
};

export const timeOptions = generateTimeOptions();
export const availableTables = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23,
];
//data from server

// Simulate fetching data with a delay
export function fetchFakeData(data: any): Promise<any> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
