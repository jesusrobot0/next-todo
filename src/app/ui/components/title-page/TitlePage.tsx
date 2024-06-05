interface Props {
  title: string;
  description?: string;
}

export function TitlePage({ title, description }: Props) {
  return (
    <div className="mb-8">
      <h1 className="mb-2 text-2xl capitalize text-[#222]">{title}</h1>
      <p className="xl text-[#848b9a]">{description}</p>
    </div>
  );
}
