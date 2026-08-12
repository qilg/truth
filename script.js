document.addEventListener('DOMContentLoaded', () => {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    navTabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();

            // 1. Xóa trạng thái active ở menu cũ
            navTabs.forEach(t => t.classList.remove('active'));

            // 2. Ẩn tất cả Tab nội dung
            tabContents.forEach(content => content.classList.remove('active'));

            // 3. Kích hoạt menu mới bấm
            tab.classList.add('active');

            // 4. Hiển thị duy nhất Tab được chọn
            const targetTabId = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTabId);
            
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Cuộn lên đầu trang
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});
