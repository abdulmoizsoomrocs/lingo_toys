const getProductsUrl = () => {
  const baseUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");
  if (!baseUrl) {
    throw new Error("VITE_API_URL is not configured");
  }
  return `${baseUrl}/api/products`;
};

export async function fetchProducts(filter = "all") {
  const url = new URL(getProductsUrl());
  if (filter && filter !== "all") {
    url.searchParams.set("filter", filter);
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Product request failed with status ${response.status}`);
  }

  const products = await response.json();
  if (!Array.isArray(products)) {
    throw new Error("Product API returned an invalid response");
  }
  return products;
}

export async function fetchProductById(id) {
  const response = await fetch(`${getProductsUrl()}/${encodeURIComponent(id)}`);
  if (!response.ok) {
    throw new Error(`Product request failed with status ${response.status}`);
  }
  return response.json();
}