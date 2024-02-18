import React from "react";
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { initialContent } from "./InitialContent";
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
} from "react-icons/rx";

export function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: initialContent,
    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
  });

  return (
    <>
      <EditorContent
        editor={editor}
        className="max-w-[700px] mx-auto pt-16 prose prose-violet"
      />
      {editor && (
        <BubbleMenu
          className="bg-zinc-700 shadow-xl border border-zinc-600 shadow-black/20 rounded-lg overflow-hidden flex divide-x divide-zinc-600"
          editor={editor}
        >
          <button className="p-2 text-zinc-200 text-sm items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
            <RxFontBold className="w-4 h-4"/>
          </button>
          <button className="p-2 text-zinc-200 text-sm items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
          <RxFontItalic className="w-4 h-4"/>
          </button>
          <button className="p-2 text-zinc-200 text-sm items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
          <RxStrikethrough className="w-4 h-4"/>
          </button>
          <button className="p-2 text-zinc-200 text-sm items-center gap-1.5 font-medium leading-none hover:text-zinc-50 hover:bg-zinc-600">
          <RxCode className="w-4 h-4"/>
          </button>
        </BubbleMenu>
      )}
    </>
  );
}
