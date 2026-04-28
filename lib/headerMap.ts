// Map of pages to their header images
export const headerMap: Record<string, string> = {
  page1: '/foto_vibecoding_dino.jpg',
  page2: '/foto_katten_AI-slop.jpg',
  page3: '/foto_dario_amodei.jpg',
};

// Get header image for a specific page
export const getHeaderImage = (page: string): string => {
  return headerMap[page] || '';
};
