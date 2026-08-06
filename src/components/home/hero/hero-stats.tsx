const stats = [
  {
    value: "500+",
    label: "Properties",
  },
  {
    value: "120+",
    label: "Trusted Owners",
  },
  {
    value: "50+",
    label: "Cities",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-8 lg:justify-start">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-2xl font-bold">{stat.value}</p>

          <p className="text-muted-foreground text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
