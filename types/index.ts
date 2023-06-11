export {};

declare global {
  interface Post {
    id: string;
    photos: string[];
    caption: string;
    user: {
      name: string;
      username: string;
      avatar: string;
    };
    posted_at: string;
  }
}
