import { EventEmitter } from "https://deno.land/x/event@2.0.0/mod.ts"

type WindowEvent = {
  event: [Event];
  draw: [];
};

export class Canvas extends EventEmitter<WindowEvent> {}
