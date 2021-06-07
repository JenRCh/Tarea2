import Photos from "./Photos";
import Users from "./Users";

export default interface ITodo {
  id: number;
  userId: number;
  title: string;
  photos?: Photos[];
  users?: Users[];
}