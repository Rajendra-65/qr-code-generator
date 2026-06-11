export interface InvoiceItem {
  item: string;
  qty: number;
  amount: number;
}

export const calculateInvoice = (
  google: boolean,
  instagram: boolean,
  facebook: boolean
) => {
  let items: InvoiceItem[] = [];

  if (google && !instagram && !facebook) {
    items = [
      {
        item: "Google Review QR Stand",
        qty: 1,
        amount: 500,
      },
    ];
  }

  if (google && instagram && !facebook) {
    items = [
      {
        item: "Google Review + Instagram QR Stand",
        qty: 1,
        amount: 600,
      },
    ];
  }

  if (google && instagram && facebook) {
    items = [
      {
        item: "Google + Instagram + Facebook QR Stand",
        qty: 1,
        amount: 650,
      },
    ];
  }

  const total = items.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return {
    items,
    total,
  };
};