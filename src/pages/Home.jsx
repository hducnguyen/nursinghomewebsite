import StatsSection from '../components/StatsSection';

const Home = () => {
  return (
    <main className="container mx-auto p-4">
      <section id="gioi-thieu" className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Tại sao chọn Viện Dưỡng Lão ABC?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Chăm sóc tận tâm – theo dõi sức khỏe cá nhân hóa</li>
          <li>Môi trường sống an toàn, năng động, có ý nghĩa</li>
          <li>Kết nối với gia đình mọi lúc, mọi nơi</li>
          <li>Minh bạch – chuyên nghiệp – có trách nhiệm</li>
        </ul>
      </section>
      <StatsSection />
    </main>
  );
};

export default Home;