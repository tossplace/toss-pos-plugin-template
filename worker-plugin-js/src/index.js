const { posPluginSdk } = require("@tossplace/pos-plugin-sdk");

async function main() {
  const categories = await posPluginSdk.category.getCategories();
  const catalogs = await posPluginSdk.catalog.getCatalogs();
  const merchant = await posPluginSdk.merchant.getMerchant();
  console.log({ catalogs, categories, merchant });
  // 결제수단 등록
  posPluginSdk.paymentMethod.add({
    cancelCallback: async (order, payment) => {
      console.log("cancelCallback", order, payment);
      return undefined;
    },
    payCallback: async (order, price) => {
      console.log("payCallback", order, price);
      return undefined;
    },
    data: {
      id: "test-card",
      image: "https://static.toss.im/icons/png/4x/icon-barcode-scan2.png",
      paymentName: "포인트결제",
    },
  });
}

main();
