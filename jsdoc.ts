export async function init(
  cb: (conn: Deno.Conn) => Promise<void>,
  // TODO(@littledivy): Make this toggleable with a build script?
  dev: boolean = false,
) {
  if (!dev) await downloadRelease();
  const listener = Deno.listen({ port: 34254, transport: "tcp" });
  const process = Deno.run({
    cmd: [dev ? "target/debug/deno_sdl2" : "./deno_sdl2"],
    stderr: "inherit",
    stdout: "inherit",
  });
  const conn = await listener.accept();
  const reqBuf = await readStatus(conn);
  switch (reqBuf) {
    case 0:
      // VIDEO_READY
      await cb(conn);
      break;
    default:
      break;
  }

  await process.status();
}
