const { posPluginSdk } = require("@tossplace/pos-plugin-sdk");

async function main() {
  const categories = await posPluginSdk.category.getCategories();
  const catalogs = await posPluginSdk.catalog.getCatalogs();
  const merchant = await posPluginSdk.merchant.getMerchant();
  console.log({ catalogs, categories, merchant });
}

main();
