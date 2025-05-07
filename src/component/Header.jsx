const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Viện Dưỡng Lão ABC</h1>
        <nav className="space-x-4">
          <a href="#gioi-thieu" className="hover:underline">Giới thiệu</a>
          <a href="#hoat-dong" className="hover:underline">Hoạt động</a>
          <a href="#lien-he" className="hover:underline">Liên hệ</a>
          <a href="#thong-bao" className="hover:underline">Thông báo</a>
          <a href="#dang-nhap" className="hover:underline">Đăng nhập</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;