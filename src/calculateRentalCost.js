/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const rentalCost = 40;
  const discount = days >= 3 && days < 7 ? 20 : days >= 7 ? 50 : 0;

  return rentalCost * days - discount;
}

module.exports = calculateRentalCost;
