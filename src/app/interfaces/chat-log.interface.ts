export interface ChatLog {
  id: number;
  user: string;
  date: Date;
  rating: number;
  messages: ChatMessage[];
}

export interface ChatMessage {
  sender: string;
  text: string;
}
