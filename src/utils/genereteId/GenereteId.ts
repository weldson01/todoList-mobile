export const GenereteId = () => {
  const date = new Date();
  const random = Math.random() * 10000;
  const Id = `#.ID${date.getDate()}~${random}~Ç~${date.getTime()}~`;
  return Id;
};
