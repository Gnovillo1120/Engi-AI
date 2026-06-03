type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({
  children,
}: PageContainerProps) {
  return (
    <main className="min-h-screen bg-[#1f1f1d] text-white">
      {children}
    </main>
  );
}