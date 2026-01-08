export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container py-3">
      <div className="card shadow-sm">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
