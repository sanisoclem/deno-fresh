/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import Logo from "../components/Logo.tsx";

export default function Home() {
  return (
    <div class={tw`bg-gray-800 p-4 w-screen  text-white`}>
      <div class={tw`mx-auto min-h-screen gap-y-8 max-w-md flex flex-col justify-center items-center`}>
        <Logo />
        <p>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={3} />
      </div>
    </div>
  );
}
