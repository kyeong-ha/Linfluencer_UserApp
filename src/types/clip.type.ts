import { IProduct } from "./product.type";

export interface IClip {
    readonly clipId: string;
    readonly clipUrl: string;
    readonly  products: IProduct[];
    readonly postId: string;
}

export class Clip {
  clipId: string;
  clipUrl: string;
  products: IProduct[] | null = null;postId: string;

  constructor(clipId: string, clipUrl: string, postId: string) {
      this.clipId = clipId;
      this.clipUrl = clipUrl;
      this.postId = postId;
  }

  public setId = (clipId: string): void => {
      this.clipId = clipId;
  }

  public setClipUrl = (clipUrl: string): void => {
      this.clipUrl = clipUrl;
  }
  
  public setProducts = (products: IProduct[]): void => {
      this.products = products;
  }

  public setPostId = (postId: string): void => {
      this.postId = postId;
  }
}