const StatsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <div className="bg-white shadow p-6 rounded text-center">
        <p className="text-4xl font-bold text-indigo-600">95%</p>
        <p>Mức độ hài lòng</p>
      </div>
      <div className="bg-white shadow p-6 rounded text-center">
        <p className="text-4xl font-bold text-indigo-600">120</p>
        <p>Cư dân đang được chăm sóc</p>
      </div>
      <div className="bg-white shadow p-6 rounded text-center">
        <p className="text-4xl font-bold text-indigo-600">5000m²</p>
        <p>Diện tích khuôn viên</p>
      </div>
    </section>
  );
};

export default StatsSection;