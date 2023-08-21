import {EventData} from 'src/feature/landing/types'

export interface User {
  id: string;
  firstName: string;
  lastName: string;
}

export interface CartItem {
  event: EventData;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export interface LikeState {
  items: EventData[];
}
