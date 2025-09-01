// Легенда
// Во время игры вам необходимо будет отображать полоску жизни над игровым персонажем.
// Для сигнализации пользователю вы решили ввести цветовую индикацию:
// Здоровье более 50 - зелёный;
// Здоровье от 50 и до 15 - жёлтый;
// Менее 15 - красный.

/**
 * @param {number} health
 * @param {string} name
 */
export default function lifeLine(hero) {
  const { name, health } = hero;
  if (typeof name !== 'string' || typeof health !== 'number') {
    return "Error, name must be String, health must be Number";
  }
  if (health >= 51) {
    return 'healthy';
  }
  if (health >= 15) {
    return 'wounded';
  }
  return 'critical';
};

// const wizard = { name: 'Маг', health: 90};
// console.log(lifeLine(wizard));