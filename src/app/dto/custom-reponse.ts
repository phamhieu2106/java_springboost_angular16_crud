export interface CustomReponse<M> {
  timeStamp: string;
  statusCode: number;
  status: string;
  reason: string;
  message: string;
  data: M;
}
