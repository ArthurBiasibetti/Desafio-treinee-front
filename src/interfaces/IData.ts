export interface IData<T> {
  data: T[];
  page?: number;
  per_page?: number;
  total_pages?: number;
  support?: {
    text: string;
    url: string;
  };
}
