"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CopyAddressProps {
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

export function CopyAddress({
  text,
  variant = "ghost",
  size = "icon",
  showText = false,
  successMessage = "Copied to clipboard!",
  children,
}: CopyAddressProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      // toast.success(successMessage);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 5000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant={variant} size={size} onClick={handleCopy}>
            {children || (
              <div className="flex text-[0.8rem] px-[0.6em] py-[0.4em] cursor-pointer rounded-sm border border-transparent font-medium font-inherit transition-all duration-200 ease-in-out hover:bg-[#202225]">
                {showText && (
                  <>
                    <span className="mr-2 text-[16px] cursor-pointer">
                      DA29j...pnDZf&#xA0;
                    </span>
                    <Copy />
                  </>
                )}
              </div>
            )}
          </Button>
        </TooltipTrigger>

        <TooltipContent className="z-9999 bg-[#333] text-white text-sm">
          {copied ? "Copied!" : "Click to copy"}
        </TooltipContent>
      </Tooltip>
    </>
  );
}
