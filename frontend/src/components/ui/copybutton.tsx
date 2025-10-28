"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import { Icons } from "@/components/icons";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  showText?: boolean;
  successMessage?: string;
  children?: React.ReactNode;
}

export function CopyButton({
  text,
  variant = "ghost",
  size = "icon",
  className,
  showText = false,
  successMessage = "Copied to clipboard!",
  children,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success(successMessage);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={cn("h-4 w-4 scale-80", className)}
    >
      {children || (
        <div className="font-inherit flex cursor-pointer rounded-xl border border-transparent bg-[#1a1a1a] px-[0.6em] py-[0.4em] text-[0.8rem] font-medium transition-all duration-200 ease-in-out">
          {copied ? <Check className="text-green-500" /> : <Copy />}
          {showText && (
            <span className="ml-2 cursor-pointer text-[16px]">
              Copy to clipboard
            </span>
          )}
        </div>
      )}
    </Button>
  );
}
