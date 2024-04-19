import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5';
import { environment } from 'src/environments/environment';
import { MarvelApiCredentials } from 'src/app/core/interfaces/MarvelApiCredentials';

@Injectable()
export class AppConfig {
  data: MarvelApiCredentials = {} as MarvelApiCredentials;
  apiURL: string = environment.apiURL;
  ts: string = Number(new Date()).toString();
  private_key: string = environment.privateKey;
  public_key: string = environment.publicKey;
  hash: string = '';
  md5 = new Md5();

  constructor() {
    this.hash = this.md5
      .appendStr(this.ts)
      .appendStr(this.private_key)
      .appendStr(this.public_key)
      .end() as string;

    this.data = {
      base_url: this.apiURL,
      private_key: this.private_key,
      public_key: this.public_key,
      hash: this.hash,
      ts: this.ts,
    };
  }
}
