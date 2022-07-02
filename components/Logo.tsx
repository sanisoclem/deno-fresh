/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export default function Logo() {
  return (
    <div class={tw``}>
      <img
        class={tw`h-24`}
        src="/logo.svg"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
    </div>
  );
}
