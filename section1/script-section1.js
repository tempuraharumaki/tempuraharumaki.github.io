document.addEventListener('DOMContentLoaded', function() {
    // すべての月の見出しを取得
    const monthTitles = document.querySelectorAll('.month-title');

    // それぞれの見出しにクリックイベントリスナーを追加
    monthTitles.forEach(title => {
        title.addEventListener('click', function() {
            // クリックされた見出しの親要素（month-group）を取得
            const parentSection = this.parentElement;
            
            // 親要素内の日記リストを取得
            const entriesList = parentSection.querySelector('.diary-entries-list');

            // リストの表示状態を切り替える
            if (entriesList.style.display === 'block') {
                entriesList.style.display = 'none';
                this.classList.remove('active');
            } else {
                entriesList.style.display = 'block';
                this.classList.add('active');
            }
        });
    });
});