// Project Category Constants
export const PROJECT_CATEGORIES = {
  'agricultural': 'Agricultural',
  'industrial': 'Industrial',
  'recladding': 'Recladding',
  'groundworks': 'Groundworks',
  'new-build': 'New Build',
} as const;

export type ProjectCategoryKey = keyof typeof PROJECT_CATEGORIES;
