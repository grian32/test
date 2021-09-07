import { EventEmitter } from "https://deno.land/x/event@2.0.0/mod.ts"

type WindowEvent = {
  event: [Event];
  draw: [];
};

export function init(
  cb: (conn: Deno.Conn) => Promise<void>,
  // TODO(@littledivy): Make this toggleable with a build script?
  dev: boolean = false,
) {

}

export class Canvas extends EventEmitter<WindowEvent> {}
