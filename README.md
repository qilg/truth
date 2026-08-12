# 🔍 Detective Conan vs Kaito Kid Website 🎩

Website đẹp mắt, hiện đại giới thiệu về cuộc đối đầu kinh điển giữa **Thám tử Edogawa Conan** và **Siêu trộm Kaito Kid**.

---

## 🌟 Tính Năng Nổi Bật

- **Giao diện Dual-Theme:** Thiết kế chia đôi 2 tông màu đặc trưng cho Conan (Xanh/Đỏ) và Kaito Kid (Trắng/Tím/Vàng).
- **Chuyển đổi Chế độ Xem:** Nút Toggle thay đổi linh hoạt giữa giao diện Cả Hai, Chuyên Conan, hoặc Chuyên Kaito Kid.
- **Hồ sơ Nhân vật & Bảo bối:** Bố cục dạng card hiện đại, chi tiết về kỹ năng, tính cách, vũ khí đặc trưng.
- **Dòng thời gian Trận chiến:** Lịch sử những vụ đụng độ nổi tiếng từ TV series đến Movie.
- **Quiz Tương Tác:** Trắc nghiệm nhanh "Bạn thuộc phe Conan hay Kaito Kid?" bằng JavaScript.
- **Hoàn toàn Responsive:** Hiển thị mượt mà trên Điện thoại, Tablet và Máy tính.

---

## 📁 Cấu Trúc Thư Mục Project

```text
├── index.html        # Trang chủ HTML5
├── css/
│   └── style.css     # File CSS tùy chỉnh giao diện & responsive
├── js/
│   └── script.js    # Xử lý logic chuyển theme và Quiz trắc nghiệm
└── README.md         # Hướng dẫn chi tiết dự án
```

---

## 🚀 Hướng Dẫn Tải Lên GitHub & Bật Web (GitHub Pages)

### **Bước 1: Giải nén file ZIP**
Giải nén file archive nhận được, bạn sẽ thu được thư mục project chứa `index.html`, `css/`, `js/`, `README.md`.

---

### **Bước 2: Tạo Repository mới trên GitHub**
1. Truy cập [GitHub](https://github.com/) và đăng nhập tài khoản của bạn.
2. Bấm vào nút **`+`** (góc trên bên phải) ➔ Chọn **`New repository`**.
3. Đặt tên **Repository Name** (ví dụ: `conan-vs-kaito-kid`).
4. Để chế độ **`Public`**.
5. Bấm **`Create repository`**.

---

### **Bước 3: Tải file lên GitHub**

#### **Cách 1: Sử dụng giao diện Web GitHub (Đơn giản nhất)**
1. Tại trang Repository vừa tạo, bấm chọn link **`uploading an existing file`**.
2. Kéo thả toàn bộ thư mục/file (`index.html`, thư mục `css`, thư mục `js`, `README.md`) vào ô upload.
3. Chờ file tải xong, kéo xuống dưới bấm **`Commit changes`**.

#### **Cách 2: Sử dụng Git Command Line**
Mở Terminal / Git Bash trong thư mục project và chạy các lệnh sau:
```bash
git init
git add .
git commit -m "Initial commit - Conan vs Kaito Kid Website"
git branch -M main
git remote add origin https://github.com/<USERNAME-CỦA-BẠN>/conan-vs-kaito-kid.git
git push -u origin main
```

---

### **Bước 4: Bật Web Miễn Phí (GitHub Pages)**
1. Vào mục **Settings** của Repository trên GitHub.
2. Tại menu bên trái, tìm chọn **Pages** (dưới mục Code and automation).
3. Tại phần **Build and deployment** ➔ **Branch**:
   - Chọn branch: `main`
   - Chọn folder: `/ (root)`
4. Nhấn **`Save`**.
5. Chờ khoảng 1 - 2 phút, GitHub sẽ cấp cho bạn một đường link website có dạng:  
   `https://<USERNAME-CỦA-BẠN>.github.io/conan-vs-kaito-kid/`

---

## 🛠️ Công Nghệ Sử Dụng
- **HTML5 & CSS3** (Flexbox, Grid, CSS Variables, Animations)
- **JavaScript ES6** (DOM Manipulation)
- **Font Awesome 6** (Icons)
- **Google Fonts** (Montserrat, Playfair Display, Roboto)

---
*Chúc bạn có một trang web độc đáo đăng tải lên GitHub thành công!*
