type Sale = {
  id: number;
  productName: string;
  price: number;
  quantity: number;
};

function generateReport(sales: Sale[]): string {
  if (!sales || sales.length === 0) {
    return 'No sales data available.';
  }

  const totalRevenue = calculateTotalRevenue(sales);
  const totalItems = calculateTotalItems(sales);
  const averageRevenue = calculateAverageRevenue(totalRevenue, totalItems);

  return `Total Revenue: $${totalRevenue.toFixed(2)}\nTotal Items Sold: ${totalItems}\nAverage Revenue per Item: $${averageRevenue.toFixed(2)}`;
  //   let totalRevenue = 0;
  //   let totalItems = 0;

  //   for (let i = 0; i < sales.length; i++) {
  //     totalRevenue += sales[i].price * sales[i].quantity;
  //     totalItems += sales[i].quantity;
  //   }

  //   let averageRevenue = 0;
  //   if (totalItems > 0) {
  //     averageRevenue = totalRevenue / totalItems;
  //   }

  //   return `Total Revenue: $${totalRevenue}\nTotal Items Sold: ${totalItems}\nAverage Revenue per Item: $${averageRevenue}`;
}

function calculateTotalRevenue(sales: Sale[]): number {
  return sales.reduce((sum, sale) => sum + sale.price * sale.quantity, 0);
}

function calculateTotalItems(sales: Sale[]): number {
  return sales.reduce((sum, sale) => sum + sale.quantity, 0);
}

function calculateAverageRevenue(
  totalRevenue: number,
  totalItems: number,
): number {
  if (totalItems <= 0) return 0;
  return totalRevenue / totalItems;
}
export {
  generateReport,
  calculateTotalRevenue,
  calculateTotalItems,
  calculateAverageRevenue,
};
