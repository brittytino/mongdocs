import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Copy, RotateCcw, Check, Code2, Eye, Edit3 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "./ui/textarea";

interface CodePlaygroundProps {
  title?: string;
  initialCode?: string;
  language?: string;
  height?: string;
  editable?: boolean;
  showPreview?: boolean;
}

export const CodePlayground = ({
  title = "Code Playground",
  initialCode = "",
  language = "javascript",
  height = "400px",
  editable = true,
  showPreview = false,
}: CodePlaygroundProps) => {
  const [code, setCode] = useState(initialCode);
  const [isEditing, setIsEditing] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "Code has been copied successfully",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  const handleReset = () => {
    setCode(initialCode);
    setIsEditing(false);
    toast({
      title: "Code reset",
      description: "Code has been restored to initial state",
    });
  };

  return (
    <Card className="overflow-hidden border-border/50 shadow-lg">
      {/* Header */}
      <div className="bg-gradient-to-r from-docnav to-docnav/90 px-4 py-3 border-b border-border/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-docnav-accent" />
            <span className="font-semibold text-docnav-foreground">{title}</span>
            <span className="text-xs text-docnav-foreground/60 bg-docnav-foreground/10 px-2 py-1 rounded">
              {language}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {editable && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
                className="text-docnav-foreground hover:text-docnav-accent hover:bg-docnav-foreground/10"
              >
                <Edit3 className="w-4 h-4 mr-1" />
                {isEditing ? "View" : "Edit"}
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopy}
              className="text-docnav-foreground hover:text-docnav-accent hover:bg-docnav-foreground/10"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 mr-1" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </>
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              className="text-docnav-foreground hover:text-docnav-accent hover:bg-docnav-foreground/10"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reset
            </Button>
          </div>
        </div>
      </div>

      {/* Editor/Viewer */}
      {showPreview ? (
        <Tabs defaultValue="code" className="w-full">
          <TabsList className="w-full justify-start rounded-none border-b border-border/30 bg-muted/30">
            <TabsTrigger value="code" className="gap-2">
              <Code2 className="w-4 h-4" />
              Code
            </TabsTrigger>
            <TabsTrigger value="preview" className="gap-2">
              <Eye className="w-4 h-4" />
              Preview
            </TabsTrigger>
          </TabsList>
          <TabsContent value="code" className="m-0">
            {isEditing && editable ? (
              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="font-mono text-sm border-0 rounded-none focus-visible:ring-0 min-h-[400px] resize-none"
                style={{ height }}
              />
            ) : (
              <div style={{ maxHeight: height }} className="overflow-auto">
                <SyntaxHighlighter
                  language={language}
                  style={vscDarkPlus}
                  showLineNumbers
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: "14px",
                    minHeight: height,
                  }}
                  codeTagProps={{
                    style: {
                      fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                    },
                  }}
                >
                  {code}
                </SyntaxHighlighter>
              </div>
            )}
          </TabsContent>
          <TabsContent value="preview" className="m-0 p-4 bg-background" style={{ minHeight: height }}>
            <div className="prose prose-sm max-w-none dark:prose-invert">
              <pre className="bg-code-bg text-code-foreground p-4 rounded-lg overflow-auto">
                <code>{code}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <>
          {isEditing && editable ? (
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="font-mono text-sm border-0 rounded-none focus-visible:ring-0 min-h-[400px] resize-none"
              style={{ height }}
            />
          ) : (
            <div style={{ maxHeight: height }} className="overflow-auto">
              <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                showLineNumbers
                customStyle={{
                  margin: 0,
                  borderRadius: 0,
                  fontSize: "14px",
                  minHeight: height,
                }}
                codeTagProps={{
                  style: {
                    fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
                  },
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          )}
        </>
      )}
    </Card>
  );
};
