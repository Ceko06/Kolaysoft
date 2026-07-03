import { motion } from 'framer-motion';

export function LegalDoc({ title, children }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-none"
    >
      <h1 className="font-cabin font-800 text-slate-900 text-2xl md:text-3xl leading-tight mb-8 pb-6 border-b border-slate-200">
        {title}
      </h1>
      <div className="space-y-5 text-slate-600 text-[15px] leading-7">
        {children}
      </div>
    </motion.article>
  );
}

export function P({ children }) {
  return <p className="leading-7">{children}</p>;
}

export function H2({ children }) {
  return <h2 className="font-cabin font-700 text-slate-900 text-lg md:text-xl mt-8 mb-3">{children}</h2>;
}

export function Info({ rows }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
      {rows.map((r, i) => (
        <div key={i} className={`px-5 py-3 text-sm ${i !== rows.length - 1 ? 'border-b border-slate-200' : ''}`}>
          {r}
        </div>
      ))}
    </div>
  );
}

export function List({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((it, i) => <li key={i}>{it}</li>)}
    </ul>
  );
}

export function Table({ head, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm text-left border-collapse">
        <thead>
          <tr className="bg-slate-100 text-slate-800">
            {head.map((h, i) => (
              <th key={i} className="px-4 py-3 font-semibold border-b border-slate-200 align-top">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="odd:bg-white even:bg-slate-50 align-top">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 border-b border-slate-200 text-slate-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
