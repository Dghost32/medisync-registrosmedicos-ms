export interface IResponse<T> {
  success: boolean;
  data: T;
  error?: string;
  warnings?: Array<string>;
}
