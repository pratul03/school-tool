import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "../magicui/animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";

export function ShinyHeader({ text }: { text: string }) {
  return (
    <div className="z-10 flex min-h-64 items-center justify-center">
      <div
        className={cn(
          "group rounded-xl border border-black/5 bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-purple-950 dark:to-indigo-950 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-stone-800 hover:duration-300 hover:dark:text-neutral-400">
          <span>✨ {text}</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
