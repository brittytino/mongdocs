interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-6 bg-docnav text-docnav-foreground rounded-lg p-6 border border-border/30">
      <h3 className="text-lg font-bold mb-4 text-docnav-accent">Table of Contents</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-sm hover:text-docnav-accent transition-colors text-left w-full"
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
