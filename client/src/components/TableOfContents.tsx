import { useEffect, useState } from 'react';

interface TOCItem {
    id: string;
    text: string;
    level: number;
}

export function TableOfContents({ html }: { html: string }) {
    const [toc, setToc] = useState<TOCItem[]>([]);

    useEffect(() => {
        // Crear div temporal para parsear HTML
        const temp = document.createElement('div');
        temp.innerHTML = html;

        // Extraer headers
        const headers = temp.querySelectorAll('h2, h3');
        const items: TOCItem[] = [];

        headers.forEach((header, index) => {
            const id = `heading-${index}`;
            // Note: We don't modify the actual DOM of the article here, 
            // but we use these IDs to match the ones we'll inject in the Article component
            items.push({
                id,
                text: header.textContent || '',
                level: parseInt(header.tagName.substring(1))
            });
        });

        setToc(items);
    }, [html]);

    if (toc.length === 0) return null;

    return (
        <div className="sticky top-32 bg-white/[0.03] backdrop-blur-lg rounded-2xl p-6 border border-white/10 hidden lg:block">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#a855f7] mb-6">En esta página</h3>
            <nav>
                <ul className="space-y-4">
                    {toc.map(item => (
                        <li
                            key={item.id}
                            className={`${item.level === 3 ? 'ml-4' : ''} transition-all duration-300`}
                        >
                            <a
                                href={`#${item.id}`}
                                className="text-sm text-gray-400 hover:text-[#a855f7] transition-colors flex items-center gap-2 group"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <span className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-[#a855f7] transition-colors"></span>
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
